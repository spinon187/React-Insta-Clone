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
        </div>
    )
};

export default SearchBar;