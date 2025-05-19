import { updateDoneTask, updateTotalTask } from "./list.js";
import { listGroup } from "./selector.js";

const observer = () => {
  const log = () => {
    console.log("Observer");
    updateDoneTask();
    updateTotalTask();
  };

  const observerOptions = {
    childList: true,
    subtree: true,
    attributes: true,
  };

  const listGroupObserver = new MutationObserver(log);
  listGroupObserver.observe(listGroup, observerOptions);
};

export default observer;
