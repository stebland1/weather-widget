import React from 'react';
import WeatherForecast from './components/WeatherForecastList';
import GlobalStyle from './styles/GlobalStyle';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <WeatherForecast />
    </>
  );
};

export default App;
