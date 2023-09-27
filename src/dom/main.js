import { newContainer } from "./dom_helper";
import { header } from "./header";
import { content } from "./content/content";

const main = (() => {
  const cont = newContainer('main')

  cont.append(header, content)

  return cont
})();

export {main}
