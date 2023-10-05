import { newEl} from "./dom_helper";
import { main } from "./main";

const dom = (() => {
  const cont = newEl('container')

  cont.append(main)

  document.body.append(cont)
})();

export { dom }
