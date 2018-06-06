import React, { Component } from 'react';
import Map from './google_map';
import '../App.css';


class App extends Component {
  constructor(props){
     super(props);
     this.state =  { lat: -34.387, lng: 150.644 };
  }

  render() {
    console.log(this.props);
      return (
        <div style={{height: '100%'}}>
          Map Me
          <button className="btn btn-primary" onClick={() => this.setState({ lat: 40.7128, lng: -74.0059 })}>
            New York
          </button>
          <Map lat={this.state.lat} lng={this.state.lng} />
        </div>
      )
  }
}

export default App;
