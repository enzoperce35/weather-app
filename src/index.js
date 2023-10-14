import PubSub from 'pubsub-js';
import { dom } from './dom/dom';
import { formEvent } from './events/form_event';
import { storage } from './storage';
import './index.css';
import { displayWeather } from './async_function/promise_then';

// A classic promise_then async func; newer async functions are called on form submissions.
displayWeather(storage.defaultCity)
  .then((data) => {
    PubSub.publish('data_ready', data);
  },

  (error) => {
    console.log(error);
});
