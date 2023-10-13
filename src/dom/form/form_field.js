import { newEl } from '../dom_helper';

export const formField = (obj) => {
  const field = newEl('', 'form-field');

  const label = (() => {
    const el = document.createElement('label');
    el.innerHTML = obj;
    el.setAttribute('for', obj);

    const cont = newEl('', 'field-el', 'span');
    cont.appendChild(el);

    return cont;
  })();

  const input = (() => {
    const el = document.createElement('input');
    el.setAttribute('name', obj);

    const cont = newEl('', 'field-el', 'span');
    cont.appendChild(el);

    return cont;
  })();

  field.append(label, input);

  return field;
};
