import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import useGeolocation from '../utils/useGeolocation';
import { getForecast } from '../actions/weatherActions';
import {
  selectHourlyForecast,
  selectDailyForecast,
} from '../reducers/weatherForecastReducer';

import WeatherForecastDaily from '../components/WeatherForecastDaily';
import WeatherForecastHourly from '../components/WeatherForecastHourly';

const ForecastWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #f1f1f1;
  border-radius: 4px;
  overflow: hidden;
  width: 800px;
  box-shadow: 0px 0px 12px 5px rgba(0, 0, 0, 0.2);
  height: 277px;
  user-select: none;
  position: relative;
`;

const ForecastHeading = styled.h2`
  margin-left: 0.5rem;
  font-size: 16px;
`;

const DailyContainer = styled.div`
  display: flex;
  background: #fff;
  z-index: 2;
`;

const HourlyContainer = styled(motion.div)`
  display: flex;
  background: var(--green);
  overflow: scroll;
  z-index: 1;
`;

const InfoParagraph = styled.p`
  position: absolute;
  bottom: 0;
  margin: 0.5rem;
  color: var(--dark-grey);
  font-size: 12px;
`;

const WeatherForecast = () => {
  const dispatch = useDispatch();

  const daily = useSelector(selectDailyForecast);
  const hourly = useSelector(selectHourlyForecast);

  const { loading } = useSelector((state) => state.weatherForecast);

  useGeolocation(({ latitude, longitude }) =>
    dispatch(getForecast(latitude, longitude))
  );

  return loading ? (
    <span>Loading...</span>
  ) : (
    <ForecastWrapper>
      <ForecastHeading>Weather Forecast</ForecastHeading>
      <DailyContainer>
        {daily.map((day, i) => (
          <WeatherForecastDaily key={i} day={day} iteration={i} />
        ))}
      </DailyContainer>
      <AnimatePresence>
        {hourly && hourly.length > 0 && (
          <HourlyContainer
            initial={{ y: '-100%' }}
            animate={{ y: '0' }}
            transition={{ stiffness: '0' }}
            exit={{ y: '-100%' }}
          >
            {hourly.map((hour, i) => (
              <WeatherForecastHourly key={i} hour={hour} />
            ))}
          </HourlyContainer>
        )}
      </AnimatePresence>
      <InfoParagraph>Select a day to view the hourly forecast</InfoParagraph>
    </ForecastWrapper>
  );
};

export default WeatherForecast;
