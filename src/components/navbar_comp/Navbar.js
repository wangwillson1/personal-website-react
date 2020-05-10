import React from 'react';
import './Navbar.css';
import NavbarItem from './NavbarItem';

class Navbar extends React.Component {
    render() {
        return (
            <div className="nav-container">
                <NavbarItem content="Portfolio"/>
                <NavbarItem content="Resume"/>
                <NavbarItem content="Contact"/>
            </div>
        )
    }
}

export default Navbar;