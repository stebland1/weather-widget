import {
  WEATHER_REQUEST,
  WEATHER_SUCCESS,
  WEATHER_FAIL,
  SET_SELECTED_DATE,
} from '../constants/weatherConstants';

const initialState = {
  loading: true,
  daily: [],
  hourly: [],
  selectedDate: null,
  error: null,
};

export const weatherForecastReducer = (state = initialState, action) => {
  switch (action.type) {
    case WEATHER_REQUEST:
      return {
        ...state,
        loading: true,
        daily: [],
      };
    case WEATHER_SUCCESS:
      return {
        ...state,
        loading: false,
        daily: action.payload.daily,
        hourly: action.payload.hourly,
      };
    case WEATHER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case SET_SELECTED_DATE:
      return {
        ...state,
        selectedDate: action.payload,
      };
    default:
      return state;
  }
};

export const selectDays = (state) => {
  return state.weatherForecast.daily.map((day) => {
    return new Date(day.dt * 1000).toString().slice(0, 3);
  });
};

export const selectHourlyForecast = (state) => {
  if (state.weatherForecast.selectedDate !== null) {
    const selectedDate = new Date(state.weatherForecast.selectedDate);
    return state.weatherForecast.hourly.filter((hour) => {
      const date = new Date(hour.dt * 1000);
      return date.toDateString() === selectedDate.toDateString();
    });
  }
};

export const selectDailyForecast = (state) => state.weatherForecast.daily;

export default weatherForecastReducer;
