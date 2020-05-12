import React from 'react';
import './About.css';
import Fade from 'react-reveal/Fade';

class About extends React.Component {
    render() {
        return (
            <Fade clear>
            <div className="about">
                <div className="about-contents">
                    <h1>About Me <span role="img" aria-label="coffee emoji">☕</span></h1>
                    <p>Hey! I'm Willson, a Computer Science student at the University of Waterloo. I'm experienced with front-end technologies, like React, HTML, and CSS, but I'm also knowledgeable in back-end technologies, like C++, Java, and Python.</p>
                    <p>I'm currently working as a software engineering intern at <a href="https://pointclickcare.com/">PointClickCare</a>, but I'm looking for Winter and Fall 2021 intership opportunities!</p>
                    <p>Feel free to reach out through <a href="mailto:wang.willson1@gmail.com">email</a> or <a href="https://www.linkedin.com/in/wangwillson1">LinkedIn</a> if you'd like to hear more about my story!</p>
                </div>
            </div>
            </Fade>
        )
    }
}

export default About;