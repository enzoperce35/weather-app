import PubSub from 'pubsub-js';
// import { getWeather } from './async_function/promise_then';
// import { getWeather } from './async_function/fetch_then';
import { getWeather } from './async_function/async_await';
import './index.css';

getWeather('lipa')

/* chain the following codes when using the 'promise_then' getWeather import

.then((data) => {
    console.log(data);
  },

  (error) => {
    console.log(error);
});

*/
