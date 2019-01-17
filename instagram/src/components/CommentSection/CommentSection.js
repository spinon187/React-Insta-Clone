import React, { Component } from 'react';
import Comment from './Comment'
import './CommentSection.css'
// import dummyData from './dummy-data';


class CommentSection extends Component {
    constructor(props){
      super(props);
      this.state = {
        comments: props.comments,
        text: ''
        }
    }

    AddNewComment = e => {
        e.preventDefault();
        console.log('pow');
        console.log(e.target);
        this.setState({
            comments: [
              ...this.state.comments,
              {username: JSON.parse(window.localStorage.getItem('user')), text: this.state.text}
            ],
            text: ''
          });
      };

    HandleChanges = e => {
        this.setState({ [e.target.name]: e.target.value});
    };

    render(){
        return (
            <div className='CommentSection'>
                {this.state.comments.map(comment =>{
                    return (
                        <Comment
                            comment = {comment}
                        />
                    )
                })}
                <form className='comment-field' onSubmit={this.AddNewComment}>{}
                    <input
                        value={this.state.text}
                        // index={props.index}
                        name='text'
                        className='add-comment'
                        type='text'
                        placeholder='Add a comment...'
                        onChange={this.HandleChanges}
                    />
                    <button type = 'submit'>Post Comment</button>
                </form>
            </div>
        )
    }
}

export default CommentSection;