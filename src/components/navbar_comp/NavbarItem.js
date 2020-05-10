import React from 'react';
import './NavbarItem.css';

class NavbarItem extends React.Component {
    render() {
        return (
            <div class="nav-item">{this.props.content}</div>
        )
    }
}

export default NavbarItem;