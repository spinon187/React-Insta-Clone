import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';
// import CommentSection from './components/CommentSection/CommentSection';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      posts: [],
      searchEntry: ''
      // comments:[]
    }
  }

  componentDidMount(){
    this.setState({posts: dummyData});
    // console.log(this.state.posts);
    // console.log(this.state.comments);
  }

  HandleChanges = e => {
    this.setState({ [e.target.name]: e.target.value});
  }

  Search = e => {
    e.preventDefault();
    console.log('zoom');
    this.setState({
      posts: this.state.posts.filter(
        post => post.username === e.target.name
      )
    })
    console.log(this.state.posts);
  }
  // PlusLikes = e => {
  //   console.log('blam');
  //   e.preventDefault();
  //   // console.log(e.target);
  //   this.setState(
  //     (prevState) =>
  //     {
  //     // posts: this.state.posts.map((post, id) =>{
  //     //   if (index !==id){
  //     //     return post;
  //     //   }
  //     //   else {
  //     //     return {
  //     //       likes: this.state.posts.likes +1
  //     //     }
  //     //   }

  //     // })
  //     likes: prevState.likes +1
  //   });
  // }

  // PlusLikes = index => {
  //   console.log('blam');
  //   this.setState({
  //     posts: this.state.posts.map((post, id) => {
  //       if (index !== id){
  //         return post;
  //       }
  //       else {
  //         return {
  //           ...post,
  //           likes: post.likes + 1
  //         }
  //       }
  //     })
  //   });
  // };

  // PlusLikes = e => {
  //   e.preventDefault();
  //   this.setState({
  //     likes: this.state.likes + 1
  //   });
  //   console.log(this.state.likes)
  // }

  render() {
    return (
      <div className="App">
        <SearchBar
          posts={this.state.posts}
          HandleChanges = {this.HandleChanges}
          Search = {this.Search}
        />
        <div>
          {this.state.posts.map(post =>{
            return (
              <PostContainer
                post={post}
                comments={post.comments}
                likes={post.likes}
                PlusLikes={this.PlusLikes}
                // HandleChanges={this.HandleChanges}
                // AddNewComment={this.AddNewComment}
              />
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;
