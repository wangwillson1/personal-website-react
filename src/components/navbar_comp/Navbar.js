import React from 'react';
import './Navbar.css';
import NavbarItem from './NavbarItem';
import Logo from './Logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
    return (
        <div class="nav-container">
            <Logo />
            <NavbarItem content="About"/>
            <NavbarItem content="Skills"/>
            <NavbarItem content="Portfolio"/>
            <NavbarItem content="Connect"/>
            <FontAwesomeIcon icon={faBars} className="resp"/>
        </div>
    )
}

export default Navbar;