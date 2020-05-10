import React from 'react';
import './Header.css';
import image from './face-crop.jpg';

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <img src={image} alt="Me"></img>
                <p>Hello, I'm</p>
                <p className="large">Willson Wang</p>
            </div>
        )
    }
}

export default Header;