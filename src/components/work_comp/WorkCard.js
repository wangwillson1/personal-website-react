import React from 'react';
import './WorkCard.css';

class WorkCard extends React.Component {
    render() {
        return (
            <div className="work-card">
                <h3 className="date">{this.props.date}</h3>
                <h2>{this.props.posn}</h2>
                <h3 class="underline">{this.props.company}</h3>
                <p>{this.props.summary}</p>
            </div>
        )
    }
}

export default WorkCard;