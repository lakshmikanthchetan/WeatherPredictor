import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';
import _ from 'lodash';

class weatherProducer extends Component {
    renderWeather(cityData) {
        if(cityData == undefined) {
            return null
        }
        const city = cityData.city.name;
        const temps = _.map(cityData.list.map((data)=>data.main.temp), (temp)=> temp - 273.15) ;
        const pressure = cityData.list.map((data)=>data.main.pressure);
        const humidity = cityData.list.map((data)=>data.main.humidity);
        const lat = cityData.city.coord.lat;
        const lon = cityData.city.coord.lon;

        return (
            <tr key={city}>
                <td><GoogleMap lat={lat} lon={lon} /></td>
                <td>
                    <Chart data={temps} color='red' units='degree Celsius'></Chart>
                </td>
                <td>
                    <Chart data={pressure} color='blue' units='hPa'></Chart>

                </td>
                <td>
                    <Chart data={humidity} color='black' units='%'></Chart>
                </td>
            </tr>
        )
    }
    render() {
        return (
            <table className ='table table-hover'>
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

function mapStateToProps({weather}) {
    return {
        weather
    }
}

export default  connect(mapStateToProps)(weatherProducer);