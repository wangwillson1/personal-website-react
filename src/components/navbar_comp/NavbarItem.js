import React from 'react';
import './NavbarItem.css';

class NavbarItem extends React.Component {
    render() {
        return (
            <a className="nav-item" href={this.props.url} rel="noopener noreferrer" target="_blank" >{this.props.content}</a>
        )
    }
}

export default NavbarItem;