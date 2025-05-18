import {
  addTaskBtnHandler,
  deleteAllTaskHandler,
  doneAllTaskHandler,
  listGroupHandler,
  taskInputHandler,
} from "./handler.js";
import {
  addBtn,
  deleteAllBtn,
  doneAllBtn,
  listGroup,
  taskInput,
} from "./selector.js";

const listener = () => {
  listGroup.addEventListener("click", listGroupHandler);
  addBtn.addEventListener("click", addTaskBtnHandler);
  taskInput.addEventListener("keyup", taskInputHandler);
  deleteAllBtn.addEventListener("click", deleteAllTaskHandler);
  doneAllBtn.addEventListener("click", doneAllTaskHandler);
};

export default listener;
