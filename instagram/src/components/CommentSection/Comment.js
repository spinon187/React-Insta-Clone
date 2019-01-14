import React from 'react';

const Comment = props => {
    return (
        <div className='comment'>
            <p><span>{props.comment.username}</span>
            {props.comment.text}</p>
        </div>
    )
}

export default Comment;