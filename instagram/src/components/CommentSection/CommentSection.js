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
            <form className='comment-field' onSubmit={props.AddNewComment}>{}
                <input
                    value = {props.comments.text} 
                    className='add-comment'
                    type='text'
                    placeholder='Add a comment...'
                    onChange = {props.HandleChanges}
                />
                <button type = 'submit'>Post Comment</button>
            </form>
        </div>
    )
}

export default CommentSection;