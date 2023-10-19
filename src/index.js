import PubSub from 'pubsub-js';
import { dom } from './dom/dom';
import { storage } from './storage';
import { formView } from './dom/form/form_view';
import { formEvent } from './dom/form/form_event';
import { displayWeather } from './async_function/promise_then';
import './index.css';

// A classic promise_then async func; newer async functions are called on form submissions.
//displayWeather(storage.defaultCity)
//  .then((data) => {
//    PubSub.publish('data_ready', data);
//  },
//
//  (error) => {
//    alert(error);
//});
console.log(storage.defaultCity)
