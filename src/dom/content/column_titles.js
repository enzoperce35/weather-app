import { newContainer } from "../dom_helper";

const columnTitles = (() => {
  const cont = newContainer('title')
  const hour = newContainer('title-row')


  for(let i=0; i<24; i++) {
    const hourHead = newContainer(`title${i}`, 'hour-titles')
    hourHead.innerHTML = `0${i}:00`.slice(-5)
    
    hour.append(hourHead)
  }

  cont.append(hour)

  return cont
})();

export { columnTitles }
