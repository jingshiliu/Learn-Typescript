"use strict";
const STORAGE_KEY = 'TODO';
const todosStorage = localStorage.getItem(STORAGE_KEY) || '[]';
const todos = JSON.parse(todosStorage);
const addBtn = document.querySelector("#add-btn");
const todoInput = document.querySelector('#todo-input');
const todoForm = document.querySelector('#todo-form');
const todoList = document.querySelector('#todo-content');
loadTodos();
todoForm.addEventListener('submit', e => {
    e.preventDefault();
    if (todoInput.value.length === 0) {
        alert('Please enter a todo');
        return;
    }
    const todo = {
        content: todoInput.value,
        completed: false
    };
    todoList.appendChild(createTodoElement(todo));
    todoInput.value = '';
    todos.push(todo);
    updateStorage();
});
function createTodoElement(todo) {
    const todoElement = document.createElement('li');
    todoElement.innerText = todo.content;
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = todo.completed;
    checkbox.addEventListener('change', () => {
        todo.completed = checkbox.checked;
        updateStorage();
    });
    todoElement.appendChild(checkbox);
    return todoElement;
}
// ------------------------- Utility Functions -----------------------
function loadTodos() {
    for (let todo of todos)
        todoList.appendChild(createTodoElement(todo));
}
function updateStorage() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}
// addBtn?.addEventListener("click", ()=>{
//     console.log(todoInput.value )
// })
// todoInput.addEventListener('change', ()=>{
//     console.log(todoInput.value)
// })
const mystery = "String";
// Type Assertion
const numChars = mystery.length;
