import React, { Component } from 'react';
import './App.css';
import './sass/app.scss';
import TopSection from './components/top/index'
import BottomSection from './components/bottom/index'
import axios from 'axios'

const WEATHER_KEY="fc14147af5e04fba8e5185742192304"
class App extends Component {
constructor(props){
  super(props);
  this.state={
cityName:"London",
numforcastDays:4,
isLoading:true
  }
}
weatherUpdate(){
const {cityName,numforcastDays}=this.state;
  const URL = `http://api.apixu.com/v1/forecast.json?key=${WEATHER_KEY} &q=${cityName}&days=${numforcastDays}`
  axios.get(URL)
    .then(function (response) {
      // handle success
      return response.data;
    }).then((data)=>{
     // console.log(data)
      this.setState({
        isLoading:false,
        temp_c:data.current.temp_c,
        isDay:data.current.isDay,
        text:data.current.condition.text,
        iconURL:data.current.condition.icon,
        forecastdays:data.forecast.forecastday
      })
    
    })
    .catch(function (error) {
      // handle error
      console.log("cant fetch weather Data from API" , error);
    })
}
componentDidMount(){
const {eventEmitter} = this.props;
this.weatherUpdate()
  eventEmitter.on("updateWeather",(data)=>{
    this.setState({cityName:data},()=>this.weatherUpdate())
console.log("locationName:",data)
  })
}

  render() {
    const {isLoading,cityName,temp_c,isDay,text,iconURL,forecastdays}=this.state
    
    return (<div className="app-container">
      <div className="main-container">
      {isLoading && <h3>Loading Weather ...</h3>}
      {!isLoading &&
        <div className="top-section">
        <TopSection 
         location={cityName} 
         temp_c={temp_c}
         isDay={isDay}
         text={text}
         iconURL={iconURL}
         eventEmitter={this.props.eventEmitter}
        />
        </div>}
        <div className="bottom-section">
        <BottomSection forecastdays={forecastdays}/>
        </div>
        </div>
    </div>)
  }
}

export default App;
