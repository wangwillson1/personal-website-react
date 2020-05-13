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
                    <h1>Internships&nbsp;<span role="img" aria-label="suitcase emoji">💼</span></h1>
                    </Fade>

                    <Fade>
                        <WorkCard 
                            posn="Software Engineering Intern"
                            company="PointClickCare"
                            date="May 2020 - present"
                            url="https://pointclickcare.com/"
                            summary="Feel free to contact me for details about this internship!"
                        />
                        <WorkCard 
                            posn="Front End Developer"
                            company="Purolator"
                            date="May 2019 - August 2019"
                            url="https://purolator.com/"
                            summary='I developed and shipped the redesigned "Find a Location," "Track a Shipment," and "Rate/Zone Guides" website applications, as well as the Purolator Tackle Hunger microsite. 
                                        Additionally, I implemented JS algorithms to enhance the tracking capabilities of Google Analytics.'
                        />
                    </Fade>
                </div>
            </div>
        )
    }
}

export default Work;