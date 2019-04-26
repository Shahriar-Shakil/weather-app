import React, { Component } from 'react';

class ForecastDay extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const {day} = this.props;
        //console.log(day)
        return ( 
            <div className="forcastday-container">
            <div className="image">
            <img src={day.condition.icon} alt=""/>
            <div className="text">{day.avgtemp_c}</div>
            <div className="muted-text">{day.condition.text}</div>
            </div>
            </div>
         );
    }
}
 
export default ForecastDay;