const input = document.getElementById("todo-input");
const addButton = document.getElementById("add-button");
const list = document.getElementById("todo-list");

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
