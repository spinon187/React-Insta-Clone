import React from 'react';
import PostContainer from './PostContainer';
import SearchBar from '../SearchBar/SearchBar';

const PostsPage = props => {
    return(
        <div>
            <SearchBar
                posts={props.posts}
                HandleChanges = {props.HandleChanges}
                Search = {props.Search}
            />
            <div>
                {props.posts.map(post =>{
                    return (
                        <PostContainer
                            post={post}
                            comments={post.comments}
                            likes={post.likes}
                            PlusLikes={props.PlusLikes}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default PostsPage;