const input = document.getElementById("todo-input");
const addButton = document.getElementById("add-button");
const list = document.getElementById("todo-list");

addButton.addEventListener("click", () => {
  const todo = input.value;
  input.value = "";
  const item = document.createElement("div");
  item.innerHTML = todo;
  list.appendChild(item);
});
