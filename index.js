const input = document.getElementById("todo-input");
const addButton = document.getElementById("add-button");
const list = document.getElementById("todo-list");

function createCheckbox(item) {
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  item.addEventListener("click", () => {
    item.classList.toggle("completed");
    checkbox.checked = !checkbox.checked;
  });
  item.appendChild(checkbox);
}

function clearTextInput() {
  input.value = "";
}

function createTodo(todo) {
  item = document.createElement("div");
  createCheckbox(item);
  item.classList.add("todo");
  item.appendChild(document.createTextNode(todo));
  return item;
}

function addToList() {
  const todo = input.value;
  if (todo !== "") {
    clearTextInput();
    list.appendChild(createTodo(todo));
  }
}

input.addEventListener("keydown", (event) => {
  if (event.ctrlKey && event.keyCode === 13) {
    addToList();
  }
});

addButton.addEventListener("click", () => {
  addToList();
});
