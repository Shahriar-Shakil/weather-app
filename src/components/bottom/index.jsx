import React, { Component } from 'react';
import './style.scss'
import ForecastDay from './forecastDay'
class BottomSection extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const {forecastdays} = this.props
        
        return ( 
            <div className="bottom-container">
            <div className="inner-container">
            {forecastdays&&forecastdays.map((days,idx)=>{
                return <ForecastDay day={days.day} key={idx} />
            })}
            </div>
            </div>
         );
    }
}
 


  
export default BottomSection;