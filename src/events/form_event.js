import { displayWeather } from '../async_function/async_await';
//import { displayWeather } from '../async_function/fetch_then';

export const formEvent = (() => {
  const form = document.getElementById('form');
  const formToggles = document.getElementsByClassName('form-toggle');

  // form visibility
  for (let i = 0; i < formToggles.length; i++) {
    const toggle = formToggles[i];

    toggle.onclick = () => {
      form.style.visibility = (form.style.visibility === 'visible') ? 'hidden' : 'visible';
    };
  }

  // form submission
  form.onsubmit = (e) => {
    e.preventDefault();

    const city = () => {
      let name = '';

      new FormData(form).forEach((data) => {
        name += `${data} `;
      });

      return name;
    };

    displayWeather(city());
  };
})();
