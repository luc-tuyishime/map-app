import React, { Component } from 'react';


export default class Map extends Component {
shouldComponentUpdate(){
  return false;
}

componentDidMount(){
  this.map = new google.maps.Map(this.refs.map, {
    center: { lat: this.props.lat, lng: this.props.lng},
    zoom: 8
  });
}

render() {
  console.log(this.props);
    return (
      <div id="map" ref="map" /> // refer to the map id in the dom (html element)
    );
  }
}
