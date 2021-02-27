import axios from 'axios';
import {
  WEATHER_REQUEST,
  WEATHER_SUCCESS,
  WEATHER_FAIL,
  SET_SELECTED_DATE,
} from '../constants/weatherConstants';

export const getForecast = (lat, lon) => async (dispatch) => {
  try {
    dispatch({ type: WEATHER_REQUEST });

    const { data } = await axios.get(
      `http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
    );

    dispatch({ type: WEATHER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: WEATHER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const setSelectedDate = (date) => {
  return {
    type: SET_SELECTED_DATE,
    payload: date,
  };
};
