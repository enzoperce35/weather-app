function displayWeather(city) {
  return new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();
    req.open('GET', `http://api.weatherapi.com/v1/forecast.json?key=97b6481959404ea1a4a214919231509&q=${city}&days=3&aqi=no&alerts=no`);

    req.onload = () => {
      if (req.status === 200) {
        resolve(JSON.parse(req.response));
      } else {
        reject(new Error('Client Error'));
      }
    };

    req.onerror = () => {
      reject(new Error('Network Error'));
    };

    req.send();
  });
}

export { displayWeather };
