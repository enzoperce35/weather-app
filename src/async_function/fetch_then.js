export function displayWeather(city) {
  fetch(`https://api.weatherapi.com/v1/forecast.json?key=97b6481959404ea1a4a214919231509&q=${city}&days=3&aqi=no&alerts=no`)

    .then((response) => {
      if (!response.ok) { throw new Error(`Can't locate "${city}". Please try again.`); }

      return response.json();
    })

    .then((data) => {
      PubSub.publish('data_ready', data);
    })

    .catch((error) => {
      alert(error);
    });
}
