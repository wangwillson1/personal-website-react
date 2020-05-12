import React from 'react';
import './Card.css';

class Card extends React.Component {
    render() {
        return (
            <div className="card">
                <h3 className="date">{this.props.date}</h3>
                <h2 className="underline">{this.props.name}</h2>
                <h3>{this.props.languages}</h3>
                <p>{this.props.summary}</p>
            </div>
        )
    }
}

export default Card;