import {
  addTask,
  checkDoneTask,
  deleteTask,
  editTask,
  updateDoneTask,
  updateTotalTask,
} from "./list.js";
import { listGroup, taskInput } from "./selector.js";

export const listGroupHandler = (event) => {
  const list = event.target.closest(".list");

  if (event.target.classList.contains("list-done-check")) {
    checkDoneTask(list.id);
  }

  if (event.target.classList.contains("list-del-btn")) {
    deleteTask(list.id);
  }

  if (event.target.classList.contains("list-edit-btn")) {
    editTask(list.id);
  }
  updateDoneTask();
};

export const addTaskBtnHandler = () => {
  if (taskInput.value.trim()) {
    addTask(taskInput.value);
  } else {
    alert("Empty Text");
  }
};

export const taskInputHandler = (event) => {
  if (event.key === "Enter") {
    if (taskInput.value.trim()) {
      addTask(taskInput.value);
    } else {
      alert("Empty Text");
    }
  }
};

export const deleteAllTaskHandler = () => {
  console.log("Delete");
  const lists = listGroup.querySelectorAll(".list");
  if (confirm("Are you sure to delete all?")) {
    lists.forEach((list) => list.remove());
    updateTotalTask();
    updateDoneTask();
  }
};

export const doneAllTaskHandler = () => {
  console.log("done");
  const lists = listGroup.querySelectorAll(".list");
  lists.forEach((list) => {
    list.querySelector(".list-done-check").checked = true;
    checkDoneTask(list.id);
  });
};
