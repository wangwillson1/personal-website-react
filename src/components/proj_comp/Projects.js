import React from 'react';
import './Projects.css';
import Card from './Card';
import Fade from 'react-reveal/Fade';

class Projects extends React.Component {
    render() {
        return (
            <div className="projects">
                <div className="projects-contents">
                    <Fade>
                    <h1>Projects</h1>
                    </Fade>

                    <Fade big>
                        <Card 
                            name="Personal Website"
                            languages="React.js, Node.js, HTML, CSS"
                            date="December 2019"
                            github=""
                            summary='Implemented a modified version of the board game "Stratego" in C++.'
                        />
                        <Card 
                            name="Stratego"
                            languages="C++, Bash"
                            date="December 2019"
                            github=""
                            summary='Implemented a modified version of the board game "Stratego" in C++.'
                        />
                        <Card 
                            name="Stock Automation"
                            languages="Python"
                            date="October 2019"
                            github=""
                            summary='Built a web scraper using Python to track daily stock prices.'
                        />
                        <Card 
                            name="Voice Code"
                            languages="Python, Google Cloud APIs"
                            date="September 2019"
                            github=""
                            summary='Developed program that allows users to code using their voice.'
                        />
                        <Card 
                            name="User Detection System"
                            languages="C++, Arduino"
                            date="June 2019"
                            github=""
                            summary='Built and developed an Arduino-controlled automation system that can determine the number of occupants in a room.'
                        />
                    </Fade>
                </div>
            </div>
        )
    }
}

export default Projects;