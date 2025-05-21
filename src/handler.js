import { addTask, checkDoneTask, deleteTask, editTask } from "./list.js";
import { listGroup, taskInput } from "./selector.js";
import Swal from "../node_modules/sweetalert2";

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
  // updateDoneTask();
};

export const addTaskBtnHandler = () => {
  if (taskInput.value.trim()) {
    addTask(taskInput.value);
  } else {
    Swal.fire({ title: "Empty Text!", icon: "error" });
    // alert("Empty Text");
  }
};

export const taskInputHandler = (event) => {
  if (event.key === "Enter") {
    if (taskInput.value.trim()) {
      addTask(taskInput.value);
    } else {
      // alert("Empty Text");
      Swal.fire({ title: "Empty Text!", icon: "error" });
    }
  }
};

export const deleteAllTaskHandler = () => {
  const lists = listGroup.querySelectorAll(".list");
  Swal.fire({
    title: "Do you want to delete all?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Delete",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire("Deleted!", "", "success");
      lists.forEach((list) => list.remove());
    }
  });
};

export const doneAllTaskHandler = () => {
  const lists = listGroup.querySelectorAll(".list");
  lists.forEach((list) => {
    if (!list.querySelector(".list-done-check").checked) {
      list.querySelector(".list-done-check").checked = true;
      checkDoneTask(list.id);
    }
  });
};
