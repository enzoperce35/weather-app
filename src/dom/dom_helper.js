function newContainer(el_id = '', el_class = '') {
  const container =  document.createElement('div');

  if (el_id != '') {container.id = el_id}

  if (el_class != '') {container.classList.add(el_class)}

  return container
}

export { newContainer }
