import React from 'react';
import './Connect.css';
import Fade from 'react-reveal/Fade';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';

class Connect extends React.Component {
    render() {
        return (
            <Fade clear>
            <div className="connect">
                <div className="connect-contents">
                    <a href="mailto:wang.willson1@gmail.com"><FontAwesomeIcon icon={faEnvelope} className="icons email"/></a>
                    <a href="https://www.linkedin.com/in/wangwillson1/"><FontAwesomeIcon icon={faLinkedin} className="icons linkedin"/></a>
                    <a href="https://github.com/wangwillson1"><FontAwesomeIcon icon={faGithub} className="icons github"/></a>
                </div>
            </div>
            </Fade>
        )
    }
}

export default Connect;