function newEl(elId = '', elClass = '', el = 'div') {
  const element = document.createElement(el);

  if (elId !== '') { element.id = elId; }

  if (elClass !== '') { element.classList.add(elClass); }

  return element;
}

function currForecast(attr, data) {
  const forecast = newEl('', 'cityfore-data', 'p');
  forecast.innerHTML = `${attr}: ${data}`;

  const cont = newEl('', 'cityforecasts');
  cont.append(forecast);

  return cont;
}

function forecastBox(unit, path, el = 'span') {
  const box = newEl('', 'icon-boxes', el);

  box.style.backgroundImage = "url('" + `${path}` + "')";
  box.classList.add(`${unit}-box`);

  return box;
}

function clear(cont) {
  while(cont.firstChild){
    cont.removeChild(cont.firstChild);
  }
}

const displayLine = (() => {
  const line = newEl('', 'displayline', 'hr');

  return line;
})();

export {
  newEl,
  forecastBox,
  displayLine,
  currForecast,
  clear,
};
