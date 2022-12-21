const input = document.getElementById("todo-input");
const addButton = document.getElementById("add-button");
const list = document.getElementById("todo-list");

function createCheckbox(item) {
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener("click", () => {
    item.classList.toggle("completed");
  });
  item.appendChild(checkbox);
}

function clearTextInput() {
  input.value = "";
}

function createTodo(todo) {
  item = document.createElement("div");
  createCheckbox(item);
  item.appendChild(document.createTextNode(todo));
  return item;
}

addButton.addEventListener("click", () => {
  const todo = input.value;

  if (todo !== "") {
    clearTextInput();
    list.appendChild(createTodo(todo));
  }
});
