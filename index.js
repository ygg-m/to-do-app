const input = document.getElementById("todo-input");
const addButton = document.getElementById("add-button");
const clearButton = document.getElementById("clear-list");
const list = document.getElementById("todo-list");
const todoList = [];
const checkState = {};

// clear input text in textbox
function clearTextInput() {
  input.value = "";
}

// create to-do item
function createTodo(todo) {
  const item = document.createElement("div");
  item.classList.add("todo");

  item.appendChild(createCheckbox(todo, item));
  item.appendChild(document.createTextNode(todo));
  return item;
}

// create checkbox item to use in each to-do item
function createCheckbox(todo, item) {
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = checkState[todo] || false; // Set the check state

  checkbox.addEventListener("change", function () {
    checkState[todo] = this.checked; // Update the check state in the object
  });

  // add click to item
  item.addEventListener("click", () => {
    item.classList.toggle("completed");
    checkbox.checked = !checkbox.checked;
    checkState[todo] = checkbox.checked;
  });

  return checkbox;
}

// add to-do item to list
function addToList() {
  const todo = input.value;
  if (todo !== "") {
    clearTextInput();
    todoList.push(todo);
    updateList();
  }
}

// update todo list
function updateList() {
  clearList();
  // Add the new items to the list
  for (const todo of todoList) {
    list.appendChild(createTodo(todo));
  }
}

// event listener to ctrl+enter command
input.addEventListener("keydown", (event) => {
  if (event.ctrlKey && event.keyCode === 13) {
    addToList();
  }
});

// event listener to "add" button
addButton.addEventListener("click", () => {
  addToList();
});

// event listener to "clear list" button
clearButton.addEventListener("click", () => {
  if (list.firstChild !== null) {
    if (confirm("Are you sure you want to clear the list?")) {
      // user clicked "OK"
      clearTodoList();
      updateList();
    }
  }
});

// clear list (HTML element)
function clearList() {
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
}

// clear list (array)
function clearTodoList() {
  todoList.length = 0;
}

// save list to localStorage
function saveList() {
  localStorage.setItem("todoList", JSON.stringify(todoList));
}

function loadList() {}

// executes when the page load
window.addEventListener("load", () => {
  updateList();
});
