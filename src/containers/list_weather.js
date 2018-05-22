import React, { Component } from 'react';
import { connect } from 'react-redux';

// we want to retreive data from redux
class WeatherList extends Component{
  renderWeather(cityData){
    return(
      <tr>
          <td>{cityData.city.name}</td>
      </tr>
    );
  }

  render(){
    return(
      <table className="table table-hover">
          <thead>
              <tr>
                  <th>City</th>
                  <th>Temperature</th>
                  <th>Pressure</th>
                  <th>Humidity</th>
              </tr>
          </thead>
          <tbody>
            {this.props.weather.map(this.renderWeather)}
          </tbody>
      </table>
    );
  }
}

function mapStateToProps({weather}){
  // we use the weather because we assign it to our weatherReducer in reducers to the weather key
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
