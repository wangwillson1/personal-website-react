import React from 'react';
import './Logo.css';
import image from './web-logo.png';

function Logo() {
    return (
        <div className="logo">
            <a href="/"><img src={image} alt="Logo"/></a>
        </div>
    )
}

export default Logo