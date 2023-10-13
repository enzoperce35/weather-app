import { newEl } from './dom_helper';
import { main } from './main';
import { form } from './form/form';

export const dom = (() => {
  const cont = newEl('container');

  cont.append(main, form);

  document.body.append(cont);
})();
