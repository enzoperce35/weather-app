import { newContainer } from "./dom_helper";
import { main } from "./main";

const dom = (() => {
  const cont = newContainer('container')

  cont.append( main )

  document.body.appendChild(cont)
})();

export { dom }
