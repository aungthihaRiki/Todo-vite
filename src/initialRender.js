import { addTask, tasks } from "./list.js";

const initialRender = () => {
  console.log("Initial Render");
  tasks.forEach((task) => addTask(task));
};

export default initialRender;
