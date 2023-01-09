import React from 'react'
import '../App.css';
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <nav aria-label='mainNav'>
            <ul className='nav-links'>
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="categories">
                    <li>Categories</li>
                </Link>
                <Link to="allreviews">
                    <li>See all Reviews</li>
                </Link>
                <Link to="about">
                    <li>About</li>
                </Link>
            </ul>
        </nav >
    );
}

export default Nav;