import React from 'react';
import './Header.css';
import image from './me.jpg';
import Typical from 'react-typical';

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <img src={image} alt="Me"></img>
                <p className="large">Hi, I'm Willson!</p>
                <p>I'm a{' '}
                    <Typical    steps={['developer 💻', 2000,
                                        'designer 🖍️', 2000,
                                        'problem solver 💡', 2000,
                                        'CS student at UWaterloo 📚', 2500,
                                        'tech enthusiast 📱', 2000,
                                        'photographer 📷', 2000,
                                        'traveller 🛫', 2000]}
                                loop={Infinity}
                                wrapper="b" />
                </p>
            </div>
        )
    }
}

export default Header;