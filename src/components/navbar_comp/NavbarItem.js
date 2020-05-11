import React from 'react';
import './NavbarItem.css';

class NavbarItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleLinkClick = this.handleLinkClick.bind(this);
    }

    handleLinkClick() {
        switch (this.props.content) {
            case "Resume":
                window.open('https://github.com/wangwillson1');
                break;

            case "GitHub":
                window.open('https://github.com/wangwillson1');
                break;

            default:
                window.open('https://linkedin.com/in/wangwillson1');
                break;
        }
    }

    render() {
        return (
            <div className="nav-item" onClick={this.handleLinkClick}>{this.props.content}</div>
        )
    }
}

export default NavbarItem;