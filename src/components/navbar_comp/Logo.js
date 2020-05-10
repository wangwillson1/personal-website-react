import React from 'react';
import './Logo.css';
import image from './web-logo.png';

function Logo() {
    return (
        <a class="logo" href="/"><img src={image} alt="Logo"/></a>
    )
}

export default Logo