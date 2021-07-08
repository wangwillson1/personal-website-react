import React from 'react';
import './About.css';
import Fade from 'react-reveal/Fade';

class About extends React.Component {
    render() {
        return (
            <Fade clear>
            <div className="about">
                <div className="about-contents">
                    <h1>About Me &nbsp;<span role="img" aria-label="coffee emoji">☕</span></h1>
                    <p>Hey! I'm Willson, a Computer Science student at the University of Waterloo. I'm a full-stack developer, experienced with technologies like C#, Python, JS, SQL, and React.</p>
                    <p>I'll be working at <a target="_blank" rel="noopener noreferrer" href="https://www.wish.com">Wish</a> as a software engineering intern in Fall 2021, but I'm also looking for 2022 intership opportunities!</p>
                    <p>Feel free to reach out through <a href="mailto:wang.willson1@gmail.com">email</a> or <a href="https://www.linkedin.com/in/wangwillson1">LinkedIn</a> if you'd like to chat!</p>
                </div>
            </div>
            </Fade>
        )
    }
}

export default About;