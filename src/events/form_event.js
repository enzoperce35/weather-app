import { displayWeather } from '../async_function/async_await';
//import { displayWeather } from '../async_function/fetch_then';
import { blurredPage } from '../dom/dom_helper';

export const formEvent = (() => {
  const form = document.getElementById('form');
  const formToggles = document.querySelectorAll('.form-toggle');

  // form visibility
  for (let i = 0; i < formToggles.length; i++) {
    const toggle = formToggles[i];

    toggle.onclick = (e) => {
      if (e.target.id == 'form-link') {
        blurredPage(true)

        form.style.visibility = 'visible';
      } else {
        blurredPage()

        form.style.visibility = 'hidden';
      }
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
