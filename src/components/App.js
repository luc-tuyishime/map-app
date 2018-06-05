import React, { Component } from 'react';
import Map from './google_map';
import '../App.css';


class App extends Component {
  constructor(props){
     super(props);
  }

  render() {
    console.log(this.props);
      return (
        <div style={{height: '100%'}}>
          Map Me
          <Map lat={-34.387} lng={150.644} />
        </div>
      )
  }
}

export default App;
