import React from 'react';
import { NavLink } from 'react-router-dom';

import Logo from '../assets/upload.png'

const navbar = () => {
    let style = {
        color: 'lightblue'
    }
    return (
        <nav className='navbar'>
            <div className='logo'><img alt='logo' src={Logo}/></div>
            <div></div>
            <div>
                <ul className='navbarul'>
                    <li><NavLink exact activeStyle={style} to='/'>Home</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}

export default navbar;