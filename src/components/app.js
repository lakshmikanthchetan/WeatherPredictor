import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import WeatherProducer from '../containers/weather_producer';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <WeatherProducer />
      </div>
    );
  }
}
