import React, { Component } from 'react';
import Searchbar from '../containers/Searchbar';
import WeatherList from '../containers/WeatherList';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Searchbar />
        <WeatherList />
      </div>
    );
  }
}
