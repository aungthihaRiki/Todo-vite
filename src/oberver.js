import { updateDoneTask, updateTotalTask } from "./list.js";
import { listGroup } from "./selector.js";

const observer = () => {
  const log = () => {
    updateDoneTask();
    updateTotalTask();
  };

  const observerOptions = {
    childList: true,
    subtree: true,
    attribute: true,
  };

  const listGroupOberver = new MutationObserver(log);
  listGroupOberver.observe(listGroup, observerOptions);
};

export default observer;
