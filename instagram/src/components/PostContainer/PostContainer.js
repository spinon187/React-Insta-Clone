// import React from 'react';
import React, { Component } from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';
// import PropTypes from 'prop-types';

class PostContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            post: props.post,
            likes: props.post.likes,
            dumbUP: false,
            comments: props.comments
        }
    }

    // PlusLikes = e => {
    //     e.preventDefault();
    //     this.setState({
    //     posts: [
    //         ...this.state.post,
    //         {likes: this.state.likes + 1}
    //     ]
    //     });
    // }

    DumbPlus = e => {
        e.preventDefault();
        let dumb = this.state.post.likes;
        if (this.state.dumbUP === false){
            this.setState({
                likes: dumb + 1,
                dumbUP: true
            });
        }
        else {
            this.setState({
                likes: dumb,
                dumbUP: false
            });
        }
        console.log(this.state.likes)

    }

    // let dumb = props.likes;
    // const dumbPlus = function(){
    //     dumb = dumb + 1;
    //     console.log(dumb)
    // };


    render(){
        return (
            <div className='post' id={this.state.post.timestamp}>
                <div className='poster-id'>
                    <div className='id-image'>
                        <img src={this.state.post.thumbnailUrl} alt='Profile Thumbnail'/>
                    </div>
                    <h1>{this.state.post.username}</h1>
                </div>
                <img src={this.state.post.imageUrl} alt={this.state.post.username} />
                <div className='text-content'>
                    <div className='social'>
                        <i className="far fa-heart fa-lg" onClick={this.DumbPlus}></i>
                        <i className="far fa-comment fa-lg"></i>
                    <div className='like-total'>{this.state.likes} likes</div>
                    </div>
                    <CommentSection
                        comments={this.state.comments}
                    />
                </div>
            </div>
            
        )
    }
}



// const PostContainer = props => {
    // let dumb = props.likes;
    // const dumbPlus = function(){
    //     dumb = dumb + 1;
    //     console.log(dumb)
    // };

//     return (
//         <div className='post' id={props.post.timestamp}>
//             <div className='poster-id'>
//                 <div className='id-image'>
//                     <img src={props.post.thumbnailUrl} alt='Profile Thumbnail'/>
//                 </div>
//                 <h1>{props.post.username}</h1>
//             </div>
//             <img src={props.post.imageUrl} alt={props.post.username} />
//             <div className='text-content'>
//                 <div className='social'>
//                     <i className="far fa-heart" onClick={dumbPlus}></i>
//                     <i className="far fa-comment"></i>
//                 <div className='like-total'>{dumb} likes</div>
//                 </div>

//             </div>
//         </div>
        
//     )
// }

// PostContainer.propTypes = {
//     post: PropTypes.shape({
//         thumbnailUrl: PropTypes.string,
//         username: PropTypes.string,
//         imageUrl: PropTypes.string,
//         likes: PropTypes.number,
//         comments: PropTypes.array,
//         key: PropTypes.number
//     })
// }

export default PostContainer;