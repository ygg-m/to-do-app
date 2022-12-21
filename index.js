const input = document.getElementById("todo-input");
const addButton = document.getElementById("add-button");
const clearButton = document.getElementById("clear-list");
const list = document.getElementById("todo-list");

// clear input text in textbox
function clearTextInput() {
  input.value = "";
}

// create to-do item
function createTodo(todo) {
  item = document.createElement("div");
  createCheckbox(item);
  item.classList.add("todo");
  item.appendChild(document.createTextNode(todo));
  return item;
}

// create checkbox item to use in each to-do item
function createCheckbox(item) {
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  item.addEventListener("click", () => {
    item.classList.toggle("completed");
    checkbox.checked = !checkbox.checked;
  });
  item.appendChild(checkbox);
}

// add to-do item to list
function addToList() {
  const todo = input.value;
  if (todo !== "") {
    clearTextInput();
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
      clearList();
    } else {
      // use clicker "Cancel"
    }
  }
});

// clear list
function clearList() {
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
}
