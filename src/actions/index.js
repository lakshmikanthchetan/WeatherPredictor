import axios from 'axios';
const API_KEY = 'b1cb863fa4a9a8fd22e2e1bf20791331';
const url = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const fetch_URL = `${url}&q=${city},IN`;
    const request = axios.get(fetch_URL);

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}