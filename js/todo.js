const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

let toDo = [];
const TODO_KEY = "todos";

function saveToDo() {
  localStorage.setItem(TODO_KEY, JSON.stringify(toDo));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDo = toDo.filter(todo => todo.id != parseInt(li.id));
  saveToDo();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");

  li.id = newTodo.id;
  span.innerText = newTodo.text;
  button.innerText = "delete";
  button.addEventListener("click", deleteToDo);

  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";

  const newToDo = {
    text: newTodo + " ",
    id: Date.now(),
  };

  toDo.push(newToDo);
  saveToDo();
  paintToDo(newToDo);
}

todoForm.addEventListener("submit", handleToDoSubmit);

const savedToDo = localStorage.getItem(TODO_KEY);

if (savedToDo !== null) {
  const parsedToDos = JSON.parse(savedToDo);
  toDo = parsedToDos;
  parsedToDos.forEach(paintToDo);
}