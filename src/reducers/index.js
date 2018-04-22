import { combineReducers } from 'redux';
import weatherForecastReducer from './reducer_weather_forecast';

const rootReducer = combineReducers({
  weather: weatherForecastReducer
});

export default rootReducer;
