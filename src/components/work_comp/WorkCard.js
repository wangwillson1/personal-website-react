import React from 'react';
import './WorkCard.css';

class WorkCard extends React.Component {
    render() {
        return (
            <div className="work-card">
                <h3 className="date">{this.props.date}</h3>
                <h2>{this.props.posn}</h2>
                <a href={this.props.url}><h3 className="underline">{this.props.company}</h3></a>
                <p>{this.props.summary}</p>
            </div>
        )
    }
}

export default WorkCard;