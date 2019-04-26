import React, { Component } from 'react';
class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const {location,temp_c,text,iconURL}=this.props
        return ( 
            <div className="weather-container">
            <div className="header">{location}</div>
            <div className="inner-container">
                <div className="image" ><img src={iconURL} alt="isDayIcon"/></div>
                <div className="current-weather">{temp_c}°</div>
            </div>

            <div className="footer">{text}</div>
            </div>
         );
    }
}
 
export default Weather; 