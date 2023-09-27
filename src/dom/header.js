import PubSub from "pubsub-js";
import { newContainer } from "./dom_helper";

const header = (() =>{
  const cont = newContainer('header')
  const city = newContainer('head-main')

  PubSub.subscribe('data_ready', (_, data) => {
    city.innerHTML = data.location.name
  })

  cont.append(city)

  return cont
})();

export { header }
