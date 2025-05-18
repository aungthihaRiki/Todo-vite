import {
  doneTask,
  listGroup,
  taskInput,
  templateList,
  totalTask,
} from "./selector.js";

export const tasks = ["Read Japanese Book", "Make Test", "Learn Programming"];

export const addTask = (currentTask) => {
  listGroup.append(createNewTask(currentTask));
  taskInput.value = null;
  updateTotalTask();
};

export const updateTotalTask = () => {
  const lists = document.querySelectorAll(".list");
  totalTask.innerText = lists.length;
};

export const updateDoneTask = () => {
  const doneLists = document.querySelectorAll(".list input:checked");
  doneTask.innerText = doneLists.length;
};

export const createNewTask = (currentValue) => {
  // use with node template
  const list = templateList.content.cloneNode(true); //fragment
  //   console.dir(list);
  list.querySelector(".list").id = `list${Date.now()}`;
  list.querySelector(".task-name").innerText = currentValue;

  return list;
};

export const deleteTask = (taskId) => {
  if (window.confirm("Are you sure?")) {
    const list = document.querySelector(`#${taskId}`);
    list.classList.add("animate_animated", "animate__hinge");
    list.addEventListener("animationend", () => {
      list.remove(); // detect nearest element
      updateTotalTask();
    });
  }
};

export const editTask = (taskId) => {
  const list = document.querySelector(`#${taskId}`);
  const editInput = list.querySelector(".list-edit-input");
  const saveIcon = list.querySelector(".save-icon");
  const editIcon = list.querySelector(".edit-icon");
  const listDoneCheck = list.querySelector(".list-done-check");
  const taskName = list.querySelector(".task-name");
  listDoneCheck.toggleAttribute("Disabled");
  taskName.classList.toggle("hidden");
  editInput.classList.toggle("hidden");
  editIcon.classList.toggle("hidden");
  saveIcon.classList.toggle("hidden");

  editInput.focus();
  list.querySelector(".control").classList.toggle("!translate-x-0");
  const editMode = !editInput.classList.contains("hidden");
  if (editMode) {
    editInput.value = taskName.innerText;
  } else {
    taskName.innerText = editInput.value;
  }

  const keyEnter = (e) => {
    if (e.key === "Enter") {
      taskName.classList.remove("hidden");
      editIcon.classList.remove("hidden");
      saveIcon.classList.add("hidden");
      editInput.classList.add("hidden");
      listDoneCheck.removeAttribute("Disabled");
      list.querySelector(".control").classList.remove("!translate-x-0");
      taskName.innerText = editInput.value;
      editInput.removeEventListener("keyup", keyEnter); // from ChatGPT
    }
  };

  editInput.addEventListener("keyup", keyEnter); // from ChatGPT
};

export const checkDoneTask = (taskId) => {
  const list = document.querySelector(`#${taskId}`);
  const taskName = list.querySelector(".task-name");
  const listDoneCheck = list.querySelector(".list-done-check");
  const editBtn = list.querySelector(".list-edit-btn");

  list.classList.toggle("scale-90");
  list.classList.toggle("opacity-25");
  taskName.classList.toggle("line-through");
  if (listDoneCheck.checked) {
    editBtn.setAttribute("Disabled", true);
    editBtn.classList.add("hidden");
  } else {
    editBtn.removeAttribute("Disabled");
    editBtn.classList.remove("hidden");
  }
  updateDoneTask();
};
