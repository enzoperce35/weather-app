function displayWeather(city) {
  fetch(`http://api.weatherapi.com/v1/forecast.json?key=97b6481959404ea1a4a214919231509&q=${city}&days=3&aqi=no&alerts=no`)

    .then((response) => {
      if (!response.ok) { throw new Error('Client Error'); }

      return response.json();
    })

    .then((data) => {
      PubSub.publish('data_ready', data);
    })

    .catch((error) => {
      console.log(error);
    });
}

export { displayWeather };
