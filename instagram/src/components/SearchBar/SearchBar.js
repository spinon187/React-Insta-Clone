import React from 'react';
import './SearchBar.css';
import logo from './img/instacam.png';
import cursive from './img/instalogo.png';

const SearchBar = () => {
    return (
        <div className='search-bar'>
            <div className='branding'>
                <img className='logo' src={logo} alt='Instagram Camera'/>
                <img className='cursive' src={cursive} alt='Cursive Instagram' />
            </div>
            <input type='text' className='search-field' placeholder='Search' />
            <div className='search-icons'>
                <i class="far fa-compass"></i>
                <i class="far fa-heart"></i>
                <i class="far fa-user"></i>
            </div>

        </div>
    )
};

export default SearchBar;