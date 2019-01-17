// import React from 'react';
import React, { Component } from 'react';
import PostContainer from './PostContainer';
import SearchBar from '../SearchBar/SearchBar';
import dummyData from './dummy-data';




class PostsPage extends Component {
    constructor(props){
        super(props);
        this.state = {
          posts: [],
          isLoggedIn: props.isLoggedIn,
          searchEntry: '',
        }
    }

    componentDidMount(){
        // if(window.localStorage.getItem('user') !== '') {
          this.setState({posts: dummyData});
    }

    HandleChanges = e => {
        this.setState({ [e.target.name]: e.target.value});
    }

    ClearLocal = e => {
        // e.preventDefault();
        window.localStorage.removeItem('user');
        window.localStorage.removeItem('loginActive');
        window.location.reload()

      }

    Search = e => {
        e.preventDefault();
        console.log(this.state.searchEntry);
        // this.setState({
        //     searchEntry: e.target.name
        // })
        let tempArr = this.state.posts.filter(
            post => post.username.includes(this.state.searchEntry)
          );
          console.log(tempArr);
        this.setState({
          posts: tempArr,
          searchEntry: ''
        });
        console.log(this.state.posts);
    }

    render(){
        return(
            <div>
                <SearchBar
                    posts={this.state.posts}
                    HandleChanges = {this.HandleChanges}
                    Search = {this.Search}
                    searchEntry = {this.state.searchEntry}
                />
                <div>
                    {this.state.posts.map(post =>{
                        return (
                            <PostContainer
                                post={post}
                                comments={this.state.comments}
                                likes={this.state.likes}
                            />
                        )
                    })}
                </div>
                <button onClick={this.ClearLocal}>Log Out</button>
            </div>
        )
    }
}

export default PostsPage;