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
                    <h1>Projects &nbsp;<span role="img" aria-label="laptop-emoji">💻</span></h1>
                    </Fade>

                    <Fade big>
                        <Card 
                            name="Insights Extraction"
                            languages="Python, Flask, GCP, Azure"
                            date="August 2020"
                            url="https://github.com/mihirKachroo/HackThe6ix"
                            summary="I worked with a team to create an application that uses entity recognition and sentimental analysis to extract key insights from insurance claims. The project won the Intact Insurance Hacker Challenge at Hack The 6ix 2020!"
                        />
                        <Card 
                            name="Personal Website"
                            languages="React.js, Node.js, HTML, CSS"
                            date="May 2020"
                            url="https://github.com/wangwillson1/personal-website-react"
                            summary="This website was designed and developed by myself using React, Node, and HTML/CSS. I'm currently working to incorporate MongoDB into the site as well!"
                        />
                        <Card 
                            name="Stock Automation"
                            languages="Python, Twilio API"
                            date="October 2019"
                            url="https://github.com/wangwillson1/stock-scraper"
                            summary='I developed a Python program that automates the monitoring of fluctuations in the stock market. I used BeautifulSoup to build a web scraper and integrated the Twilio API to send SMS messages to the user when stock values fluctuated by a user-determined percentage.'
                        />
                        <Card 
                            name="Voice Code"
                            languages="Python, Google Cloud APIs"
                            date="September 2019"
                            url="https://github.com/dingdavid555/voice-code"
                            summary="For Hack the North 2019, I developed a Python program that allows users to code with their voice. Leveraging the Google Speech API, the application transcribes phrases like 'print Hello World' to its corresponding Python code."
                        />
                        <Card 
                            name="User Detection"
                            languages="C++, Arduino"
                            date="June 2019"
                            url="https://devpost.com/software/campus-heating-automation"
                            summary='For UW Energy Hacks 2019, I built and developed an Arduino-controlled automation system that can determine the number of occupants in a room. The Arduino system uses infrared break-beam lasers to automate user detection.'
                        />
                    </Fade>
                </div>
            </div>
        )
    }
}

export default Projects;