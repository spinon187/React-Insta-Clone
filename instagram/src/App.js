import React, { Component } from 'react';
// import React from 'react';
import './App.css';

// import PostContainer from './components/PostContainer/PostContainer';
// import SearchBar from './components/SearchBar/SearchBar';
// import CommentSection from './components/CommentSection/CommentSection';
import PostsPage from './components/PostContainer/PostsPage';
// import authenticate from './components/Authentication/authenticate';
import Login from './components/Login/Login'

// const Authenticate = authenticate(Login)(PostsPage);


// const App = () => {
//   return (
//     <div className='App'>
//       <Authenticate />
//     </div>
//   )
// }

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
    //   // posts: [],
    //   // searchEntry: '',
      isLoggedIn: false,
    //   // user: '',
    //   // password: ''
    //   // comments:[]
    }
  }

  // componentDidMount(){
  //   if(window.localStorage.getItem('isLoggedIn') !== true) {
  //   }
    
    // console.log(this.state.posts);
    // console.log(this.state.comments);
  // }

  // SetUser = e => {
  //   e.preventDefault();
  //   this.setState({
  //     user: this.state.user,
  //     password: this.state.password,
  //     isLoggedIn: true
  //   })
  //   window.localStorage.setItem('user', JSON.stringify(this.state.user))
  // }

  componentDidMount(){
    this.setState({
      isLoggedIn: JSON.parse(window.localStorage.getItem('isLoggedIn'))
    })
    this.forceUpdate();
  }

  HandleChanges = e => {
    this.setState({ [e.target.name]: e.target.value});
  }

  CheckLog = e => {
    e.preventDefault();
    this.setState({
      isLoggedIn: window.localStorage.getItem('isLoggedIn')
    })
  }

  ClearLocal = e => {
    e.preventDefault();
    window.localStorage.removeItem('user')
  }

  render(){
    // return (
    //   <div className="App">
    //     {/* <button onCLick={this.ClearLocal}>clear user</button> */}

    //   </div>
    // );
    return (
      <div className="App">
        <Login isLoggedIn={this.state.isLoggedIn}/>
        <PostsPage isLoggedIn={this.state.isLoggedIn}/>
      </div>
    )
  }
}

export default App;
