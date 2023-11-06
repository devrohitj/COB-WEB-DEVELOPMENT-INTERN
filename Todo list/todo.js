let addButton = document.getElementById("add");
let todoContainer = document.getElementById("todo-container");
let input = document.getElementById("input");

addButton.addEventListener("click", () => {
  var li = document.createElement("li");
  li.classList.add("li_styling");
  li.innerText = input.value;
  todoContainer.appendChild(li);
  input.value = "";
  li.addEventListener("click", () => {
    li.style.textDecoration = "line-through";
  });
  li.addEventListener("dblclick", () => {
    todoContainer.removeChild(li);
  });
});
