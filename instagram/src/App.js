import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      posts: []
    }
  }

  componentDidMount(){
    this.setState({posts: dummyData});
  }

  HandleChanges = e => {
    this.setState({ [e.target.name]: e.target.value});
  };

  AddNewComment = e => {
    e.preventDefault();
    console.log('pow');
    this.setState({
      comments: [
        ...this.state.posts.comments,
        {username: 'Unregistered User', text: this.state.text}
      ],
      text: ''
    });
  };

  render() {
    return (
      <div className="App">
        <SearchBar />
        <div>
          {this.state.posts.map(post =>{
            return (
              <PostContainer
                post={post}
                HandleChanges={this.HandleChanges}
                AddNewComment={this.AddNewComment}
              />
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;
