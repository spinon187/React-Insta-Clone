import React from 'react';
// import React, { Component } from 'react';
import './SearchBar.css';
import logo from './img/instacam.png';
import cursive from './img/instalogo.png';



const SearchBar = props => {
    return (
        <div className='search-bar'>
            <div className='branding'>
                <img className='logo' src={logo} alt='Instagram Camera'/>
                <img className='cursive' src={cursive} alt='Cursive Instagram' />
            </div>
            <form className='search-form' onSubmit={props.Search}>{}
                <input
                    value={props.searchEntry}
                    // index={props.index}
                    name='searchEntry'
                    className='search-field'
                    type='text'
                    placeholder='Search'
                    onChange={props.HandleChanges}
                />
                <button type = 'submit'>Search</button>
            </form>
            <div className='search-icons'>
                <i className="far fa-compass fa-lg"></i>
                <i className="far fa-heart fa-lg"></i>
                <i className="far fa-user fa-lg"></i>
            </div>
        </div>
    )
};

export default SearchBar;