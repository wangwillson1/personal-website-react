import React from 'react';
import './NavbarItem.css';

class NavbarItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleLinkClick = this.handleLinkClick.bind(this);
    }
    
    handleLinkClick() {
        console.log(this.props.content + " clicked");
    }

    render() {
        return (
            <div className="nav-item" onClick={this.handleLinkClick}>{this.props.content}</div>
        )
    }
}

export default NavbarItem;