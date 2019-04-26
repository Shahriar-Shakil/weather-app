import React, { Component } from 'react';
import './style.scss'
import Weather from './weather'
import { Manager, Reference, Popper } from 'react-popper';
class TopSection extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isSelectLocationOpen:false,
         }
    }
    onToggleSelectLocation(){
this.setState((prevState) => ({isSelectLocationOpen:!prevState.isSelectLocationOpen}))
    }
    onCityNameChange(e){
this.setState({locationName:e.target.value})
    }
    onSelectCity(){
const {locationName} = this.state;
const {eventEmitter} = this.props;
eventEmitter.emit("updateWeather",locationName)
this.setState({isSelectLocationOpen:false})
    }
    render() { 
      const {isSelectLocationOpen} = this.state;
      
        return ( 
            <div className="top-container">
                <div className="title">Weather Up</div>
                <Weather {...this.props}/>
                <Manager>
    <Reference>
      {({ ref }) => (
         <button className="btn btn-select-location" ref={ref}
         onClick={this.onToggleSelectLocation.bind(this)}
         >Select Location</button>
        
      )}
    </Reference>
    <Popper placement="top">
      {({ ref, style, placement, arrowProps }) => ( isSelectLocationOpen &&
        <div className="popper-container" 
        ref={ref}
         style={style}
          data-placement={placement}>
          <div className="from-container">
          <label htmlFor="location-name">Location Name</label>
          <input 
          id="locaton-name" 
          type="text" 
          placeholder="City Name"
          onChange={this.onCityNameChange.bind(this)}
          />
          <button className="btn btn-select-location" 
          onClick={this.onSelectCity.bind(this)}
          >Select</button>
          </div>
          <div ref={arrowProps.ref} style={arrowProps.style} />
        </div>
      )}
    </Popper>
  </Manager>
            </div>
         );
    }
}
 


  
export default TopSection;