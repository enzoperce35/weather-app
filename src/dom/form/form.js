import { newEl } from '../dom_helper';
import { formField } from './form_field';

export const form = (() => {
  const submit = (() => {
    const el = document.createElement('input');
    el.type = 'submit';
    el.value = 'Search';

    const cont = newEl('submit', 'form-toggle', 'span');
    cont.appendChild(el);

    return cont;
  })();

  const formHeader = (() => {
    const el = newEl('form-header', '', 'h1');

    el.innerHTML = 'Search City';

    return el;
  })();

  const formExit = (() => {
    const el = newEl('form-exit', 'form-toggle', 'p');

    el.innerHTML = 'X';

    return el;
  })();

  const formEl = newEl('form', '', 'form');
  formEl.style.visibility = 'hidden';

  formEl.append(
    formExit,
    formHeader,
    formField('City'),
    formField('Region'),
    formField('Country'),
    submit,
  );

  return formEl;
})();
