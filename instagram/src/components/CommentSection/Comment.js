import React from 'react';
import PropTypes from 'prop-types';

const Comment = props => {
    return (
        <div className='comment'>
            <p><span>{props.comment.username}</span>
            {props.comment.text}</p>
        </div>
    )
}

Comment.propTypes = {
    username: PropTypes.string,
    text: PropTypes.string
}

export default Comment;