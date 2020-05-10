import React from 'react';
import './Navbar.css';
import NavbarItem from './NavbarItem';
import Logo from './Logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {navOpen: true};
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState((currentState) => ({
            navOpen: !currentState.navOpen
        }))
    }

    render() {
        return (
            <div className="nav-container">
                <Logo className="resp"/>
                <FontAwesomeIcon icon="bars" className="resp" onClick={this.toggleNav} />
                <NavbarItem content="About"/>
                <NavbarItem content="Skills"/>
                <NavbarItem content="Portfolio"/>
                <NavbarItem content="Connect"/>
                
            </div>
        )
    }
}

export default Navbar;