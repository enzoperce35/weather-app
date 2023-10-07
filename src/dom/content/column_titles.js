import { newEl } from '../dom_helper';

const columnTitles = (() => {
  const cont = newEl('title-col');
  const hour = newEl('title-row');

  function colTitle(i) {
    if (i >= 12) {
      return `${i - 12}pm`;
    }

    return `${i}am`;
  }

  for (let i = 0; i < 24; i++) {
    const hourHead = newEl('', 'hour-titles', 'span');

    hourHead.classList.add(`title-${i}`);
    hourHead.innerHTML = colTitle(i);

    hour.append(hourHead);
  }

  cont.append(hour);

  return cont;
})();

export { columnTitles };
