import React from 'react';
import styled from 'styled-components';

const Hourly = styled.div`
  height: 100px;
  flex-basis: 100px;
  flex-grow: 0;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 4px 4px 0px 0px;
  padding: 0.5rem 0;
`;

const Temperature = styled.div`
  font-size: 12px;
`;

const WeatherForecastHourly = ({ hour }) => {
  const time = new Date(hour.dt * 1000).toLocaleTimeString();

  return (
    <Hourly>
      <div>{time}</div>
      <img
        alt={hour.weather[0].main}
        src={`http://openweathermap.org/img/wn/${hour.weather[0].icon}.png`}
      />
      <Temperature>{hour.temp}°</Temperature>
    </Hourly>
  );
};

export default WeatherForecastHourly;
