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

    render(){
        return(
            <div>
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
                                comments={this.state.comments}
                                likes={this.state.likes}
                            />
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default PostsPage;