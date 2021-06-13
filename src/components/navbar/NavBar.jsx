import React from 'react';
import {NavLink} from "react-router-dom";
import './navbar.scss';

const NavBar = () => {
    return (
        <nav className='navbar'>
            <li className='navbar__item'><NavLink exact to={'/'}>На Главную</NavLink></li>
            <li className='navbar__item'><NavLink exact to={'/favorites'}>Избранные</NavLink></li>
            <li className='navbar__item'><NavLink exact to={'/cart'}>Корзина</NavLink></li>
        </nav>
    );
};

export default NavBar;