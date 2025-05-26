let ul = document.getElementById("ul");
let addTodoButton = document.getElementById("addTodoButton");

let todosCount = 0; // Start empty

function onDeleteTodo(todoId) {
  let todoElement = document.getElementById(todoId);
  ul.removeChild(todoElement);
}

function CreTodo(todo) {
  let todoId = 'todo' + todo.No;

  let li = document.createElement('li');
  li.id = todoId;
  li.classList.add("todo-item","d-flex","flex-row");
  ul.appendChild(li);

  let checkbox = document.createElement('input');
  checkbox.type = "checkbox";
  checkbox.classList.add("todo-checkbox");
  checkbox.id = "ci" + todo.No;
  li.appendChild(checkbox);

  let labelContainer = document.createElement('div');
  labelContainer.classList.add("todo-label-container","d-flex","d-row");
  li.appendChild(labelContainer);

  let label = document.createElement('label');
  label.setAttribute("for", checkbox.id);
  label.classList.add("todo-label");
  label.textContent = todo.t;
  labelContainer.appendChild(label);

  let deleteIconContainer = document.createElement("div");
  deleteIconContainer.classList.add("delete-icon-container");
  labelContainer.appendChild(deleteIconContainer);

  let deleteIcon = document.createElement("i");
  deleteIcon.classList.add("fa-solid","fa-trash","delete-icon");
  deleteIcon.onclick = function () {
    onDeleteTodo(todoId);
  };
  deleteIconContainer.appendChild(deleteIcon);
}

function onAddTodo() {
  let userInput = document.getElementById("todoUserInput");
  let userInputValue = userInput.value.trim();

  if (userInputValue === "") {
    alert("Enter a valid task!");
    return;
  }

  todosCount += 1;
  let newTodo = {
    t: userInputValue,
    No: todosCount
  };

  CreTodo(newTodo);
  userInput.value = "";
}

addTodoButton.onclick = onAddTodo;
