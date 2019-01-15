import React from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';

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
                    <i className="far fa-comment"></i>
                <div className='like-total'>{props.post.likes} likes</div>
                </div>
                <CommentSection
                    comments={props.post.comments}
                    AddNewComment={props.AddNewComment}
                    HandleChanges={props.HandleChanges}
                />
            </div>
        </div>
        
    )
}

PostContainer.propTypes = {
    post: PropTypes.shape({
        thumbnailUrl: PropTypes.string,
        username: PropTypes.string,
        imageUrl: PropTypes.string,
        likes: PropTypes.number,
        comments: PropTypes.array,
    })
}

export default PostContainer;