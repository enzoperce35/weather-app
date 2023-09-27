async function displayWeather(city) {
  try {
    const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=97b6481959404ea1a4a214919231509&q=${city}&days=3&aqi=no&alerts=no`);
    const weather = await response.json();
    const data = await weather;

    PubSub.publish('data_ready', await data)

    if (!response.ok) { throw new Error('Client Error');}

  } catch (error) {
    console.log(error);
  }
}

export { displayWeather };
