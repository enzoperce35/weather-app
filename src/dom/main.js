import { newEl, displayLine } from './dom_helper';
import { header } from './header';
import { content } from './content/content';

const main = (() => {
  const cont = newEl('main');

  cont.append(header, content, displayLine);

  return cont;
})();

export { main };
