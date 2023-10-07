function newEl(elId = '', elClass = '', el = 'div') {
  const element = document.createElement(el);

  if (elId !== '') { element.id = elId; }

  if (elClass !== '') { element.classList.add(elClass); }

  return element;
}

function currForecast(icon, data) {
  const cont = newEl('', 'cityforecasts');
  const dataCont = newEl('', 'cityfore-data', 'span');
  const urlCont = newEl('', 'cityfore-icon', 'img');

  urlCont.src = `/src/icons/${icon}.svg`;
  dataCont.innerHTML = data;

  cont.append(urlCont, dataCont);

  return cont;
}

function forecastBox(unit, path, el = 'span') {
  const box = newEl('', 'icon-boxes', el);

  box.style.backgroundImage = "url('" + `${path}` + "')";
  box.classList.add(`${unit}-box`);

  return box;
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
};
