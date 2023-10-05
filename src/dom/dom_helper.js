function newEl(el_id = '', el_class = '', el = 'div') {
  const element = document.createElement(el);

  if (el_id != '') {element.id = el_id}

  if (el_class != '') {element.classList.add(el_class)}

  return element
}

function currForecast(icon, data) {
  const cont = newEl('', 'cityforecasts'),
    dataCont = newEl('', 'cityfore-data', 'span'),
     urlCont = newEl('', 'cityfore-icon', 'img');

  urlCont.src  = `/src/icons/${icon}.svg`
  dataCont.innerHTML = data

  cont.append(urlCont, dataCont)

  return cont
}

function forecastBox(unit, path, el = 'span'){
  let box = newEl('', 'icon-boxes', el);

  box.style.backgroundImage = "url('" + `${path}` + "')"
  box.classList.add(`${unit}-box`)

  return box
}

const displayLine = (() => {
  const line = newEl('', 'displayline', 'hr')

  return line
})();

export { newEl, forecastBox, displayLine, currForecast }
