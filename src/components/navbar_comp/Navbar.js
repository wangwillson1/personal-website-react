import React from 'react';
import './Navbar.css';
import NavbarItem from './NavbarItem';
import Logo from './Logo';

class Navbar extends React.Component {
    render() {
        return (
            <div className="nav-container">
                <Logo />
                <NavbarItem content="Resume" url={process.env.PUBLIC_URL + '/resume.pdf'} />
                <NavbarItem content="LinkedIn" url="https://www.linkedin.com/in/wangwillson1/" />
                <NavbarItem content="GitHub" url="https://github.com/wangwillson1" />
            </div>
        )
    }
}

export default Navbar;