import React from 'react';
// import React, { Component } from 'react';
import './SearchBar.css';
import logo from './img/instacam.png';
import cursive from './img/instalogo.png';

// class SearchBar extends Component {
//     constructor(props){
//         super(props);
//             this.state = {
//                 posts: props.posts,
//                 search: ''
//             }
//     }

//     HandleChanges = e => {
//         this.setState({ [e.target.name]: e.target.value});
//     };

//     Search = searchString => {
//         // e.preventDefault();
//         this.setState({
//             search: searchString});
//         this.setState({
//             posts: this.state.posts.filter(
//                 post => post.username.includes(this.state.searchString) === true
//             )
//         })
//     }

//     render(){
//         return (
//             <div className='search-bar'>
//                 <div className='branding'>
//                     <img className='logo' src={logo} alt='Instagram Camera'/>
//                     <img className='cursive' src={cursive} alt='Cursive Instagram' />
//                 </div>
//                 <form className='search-form' onSubmit={this.Search}>
//                     <input
//                         value={this.searchString}
//                         // index={props.index}
//                         name='text'
//                         className='search-field'
//                         type='text'
//                         placeholder='Search'
//                         onChange={this.HandleChanges}
//                     />
//                 </form>
//                 <div className='search-icons'>
//                     <i className="far fa-compass"></i>
//                     <i className="far fa-heart"></i>
//                     <i className="far fa-user"></i>
//                 </div>
//             </div>
//         )
//     };
// }



const SearchBar = props => {
    return (
        <div className='search-bar'>
            <div className='branding'>
                <img className='logo' src={logo} alt='Instagram Camera'/>
                <img className='cursive' src={cursive} alt='Cursive Instagram' />
            </div>
            <form className='search-form' onSubmit={props.Search}>{}
                <input
                    value={props.username}
                    // index={props.index}
                    name='text'
                    className='search-field'
                    type='text'
                    placeholder='Search'
                    onChange={props.HandleChanges}
                />
                <button type = 'submit'>Search</button>
            </form>
            <div className='search-icons'>
                <i className="far fa-compass"></i>
                <i className="far fa-heart"></i>
                <i className="far fa-user"></i>
            </div>
        </div>
    )
};

export default SearchBar;