import React from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = props => {
    return (
        <div className='post'>
            <div className='poster-id'>
                <div className='id-image'>
                    <img src={props.post.thumbnailUrl} alt='Profile Thumbnail'/>
                </div>
                <h1>{props.post.username}</h1>
            </div>
            <img src={props.post.imageUrl} alt={props.post.username} />
            <div className='text-content'>
                <div className='social'>
                    <i className="far fa-heart"></i>
                    <i class="far fa-comment"></i>
                <div className='like-total'>{props.post.likes} likes</div>
                </div>
                <div>
                 <CommentSection comments={props.post.comments} />
                </div>
            </div>
        </div>
        
    )
}

export default PostContainer;