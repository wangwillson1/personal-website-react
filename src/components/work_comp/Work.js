import React from 'react';
import './Work.css';
import WorkCard from './WorkCard';
import Fade from 'react-reveal/Fade';

class Work extends React.Component {
    render() {
        return (
            <div className="work">
                <div className="work-contents">
                    <Fade>
                    <h1>Work Experience</h1>
                    </Fade>

                    <Fade>
                        <WorkCard 
                            posn="Software Engineering Intern"
                            company="PointClickCare"
                            date="May 2020 - present"
                            github=""
                            summary='Please contact me for details.'
                        />
                        <WorkCard 
                            posn="Front End Developer"
                            company="Purolator"
                            date="May 2019 - August 2019"
                            github=""
                            summary='Responsible for development and changes of the main website, www.purolator.com, using HTML, CSS, Bootstrap, and Javascript'
                        />
                    </Fade>
                </div>
            </div>
        )
    }
}

export default Work;