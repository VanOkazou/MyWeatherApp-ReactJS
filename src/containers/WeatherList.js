import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/Chart';
import GoogleMap from '../components/GoogleMap';
import '../../style/style.css';

class WeatherList extends Component {
  renderWeather(cityData) {
    const city = cityData.city;
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const { lat, lon } = city.coord;

    return (
      <tr key={city.id}>
        <td><GoogleMap lat={lat} lng={lon} /></td>
        <td>
          <Chart data={temps} color="red" units="K" />
        </td>
        <td>
          <Chart data={pressures} color="green" units="hPa" />
        </td>
        <td>
          <Chart data={humidities} color="blue" units="%" />
        </td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th style={{width: 28 + '%'}}>Temperature (K)</th>
            <th style={{width: 28 + '%'}}>Pressure (hPa)</th>
            <th style={{width: 28 + '%'}}>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
