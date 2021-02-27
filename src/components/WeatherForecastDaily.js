import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { selectDays } from '../reducers/weatherForecastReducer';
import { setSelectedDate } from '../actions/weatherActions';

const Daily = styled.div`
  cursor: pointer;
  flex-grow: 1;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 4px 4px 0px 0px;
  padding: 0.5rem;
  &:hover {
    background-color: var(--light-grey);
  }
  &.active {
    background-color: var(--green);
  }
`;

const Temperature = styled.div`
  font-size: 12px;
`;

const TemperatureHigh = styled.span`
  padding-right: 4px;
`;

const TemperatureLow = styled.span`
  color: var(--dark-grey);
`;

const WeatherForecastDaily = ({ day, iteration }) => {
  const dispatch = useDispatch();
  const days = useSelector(selectDays);
  const { selectedDate } = useSelector((state) => state.weatherForecast);
  const dateTime = day.dt * 1000;

  const onClickHandler = () => {
    dispatch(setSelectedDate(selectedDate === dateTime ? [] : dateTime));
  };

  return (
    <Daily
      className={selectedDate === dateTime && 'active'}
      onClick={onClickHandler}
    >
      <div>{days[iteration]}</div>
      <img
        alt={day.weather[0].main}
        src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
      />
      <Temperature>
        <TemperatureHigh>{Math.floor(day.temp.max)}°</TemperatureHigh>
        <TemperatureLow>{Math.floor(day.temp.min)}°</TemperatureLow>
      </Temperature>
    </Daily>
  );
};

export default WeatherForecastDaily;
