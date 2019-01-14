import React from 'react';
import Comment from './Comment'
import './CommentSection.css'

const CommentSection = props => {
    return (
        <div>
            {props.comments.map(comment =>{
                return (
                    <Comment
                        comment = {comment}
                    />
                )
            })}
            <input className='add-comment' type='text' placeholder='Add a comment...'/>
        </div>
    )
}

export default CommentSection;