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

  render() {
    return (
      <div className="App">
        <SearchBar />
        <div>
          {this.state.posts.map(post =>{
            return (
              <PostContainer post={post} />
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;
