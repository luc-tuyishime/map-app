import React, { Component } from 'react';

const google = window.google;

export default class Map extends Component {
shouldComponentUpdate(){
  return false; // never rerender this component
}

componentDidMount(){
  this.map = new google.maps.Map(this.refs.map, {
    center: { lat: this.props.lat, lng: this.props.lng},
    zoom: 8
  });
}

// will receive new props (lat, lng) from app.js
componentWillReceiveProps(nextProps){
  this.map.panTo({ lat: nextProps.lat, lng: nextProps.lng });
}

render() {
  console.log(this.props);
    return (
      <div id="map" ref="map" /> // refer to the map id in the dom (html element)
    );
  }
}
