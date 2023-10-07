import PubSub from 'pubsub-js';
import { dom } from './dom/dom';
import './index.css';
import { displayWeather } from './async_function/async_await';
// import { displayWeather } from './async_function/fetch_then';
// import { getWeather } from './async_function/promise_then';

displayWeather('lipa');

/* chain the following codes when using the 'promise_then' getWeather import

getWeather('lipa')
  .then((data) => {
    PubSub.publish('data_ready', data);
  },

  (error) => {
    console.log(error);
});

*/
