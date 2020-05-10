import React from 'react';
import './Navbar.css';
import NavbarItem from './NavbarItem';
import Logo from './Logo';

class Navbar extends React.Component {
    render() {
        return (
            <div className="nav-container">
                <Logo />
                <NavbarItem content="Portfolio"/>
                <NavbarItem content="Resume"/>
                <NavbarItem content="Contact"/>
            </div>
        )
    }
}

export default Navbar;