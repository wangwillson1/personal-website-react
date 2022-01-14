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
                            posn="Software Engineer Intern"
                            company="Wish"
                            date="September 2021 - December 2021"
                            url="https://www.wish.com"
                            summary="I contributed to the video transcoding microservice which powers features on the Wish Marketplace, like Wish Clips and 1Sansome. I also handled some cloud engineering tasks, like using Kubernetes to enable horizontal pod autoscaling."
                        />
                        <WorkCard 
                            posn="Software Engineering Intern"
                            company="Geotab"
                            date="January 2021 - April 2021"
                            url="https://www.geotab.com"
                            summary="I contributed to the development of the SmartChargeRewards application which helps electric vehicle owners reduce their load on the electric grid."
                        />
                        <WorkCard 
                            posn="Software Engineering Intern"
                            company="PointClickCare"
                            date="May 2020 - August 2020"
                            url="https://pointclickcare.com/"
                            summary="I contributed to the development of the Infection Prevention and Control application which helps LTC homes manage infectious disease outbreaks."
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