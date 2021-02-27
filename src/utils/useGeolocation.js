import { useEffect } from 'react';

const useGeolocation = (callback) => {
  const onEvent = ({ coords }) => callback(coords);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(onEvent);
    //eslint-disable-next-line
  }, []);

  return;
};

export default useGeolocation;
