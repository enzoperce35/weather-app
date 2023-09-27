import { newContainer } from "../dom_helper";
import { columnTitles } from "./column_titles";
import { mainContent } from "./main_contents/main_content";

const content = (() => {
  const cont = newContainer('content')

  cont.append(columnTitles, mainContent)

  return cont
})();

export {content}
