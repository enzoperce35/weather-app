async function getWeather(city) {
  try {
    const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=97b6481959404ea1a4a214919231509&q=${city}&days=3&aqi=no&alerts=no`);
    const weather = await response.json();
    const data = await weather;

    if (!response.ok) { throw new Error('Client Error'); }

    console.log(data);

  } catch (error) {
    console.log(error);
  }
}

export { getWeather };
