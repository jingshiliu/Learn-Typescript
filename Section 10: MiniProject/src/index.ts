interface Todo{
    content: string,
    completed: boolean
}

const STORAGE_KEY = 'TODO'
const todosStorage: string = localStorage.getItem(STORAGE_KEY) || '[]'
const todos: Todo[] = JSON.parse(todosStorage)

const addBtn: HTMLButtonElement| null = document.querySelector("#add-btn")
const todoInput = document.querySelector('#todo-input') as HTMLInputElement
const todoForm = document.querySelector('#todo-form') as HTMLFormElement
const todoList = document.querySelector('#todo-content') as HTMLUListElement

loadTodos()

todoForm.addEventListener('submit', e =>{
    e.preventDefault()
    if(todoInput.value.length === 0){
        alert('Please enter a todo')
        return
    }
    const todo: Todo = {
        content: todoInput.value, 
        completed: false
    }
    todoList.appendChild(createTodoElement(todo))

    todoInput.value = ''
    todos.push(todo)
    updateStorage()
})

function createTodoElement(todo: Todo): HTMLLIElement{
    const todoElement = document.createElement('li') as HTMLLIElement
    todoElement.innerText = todo.content

    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.checked = todo.completed

    checkbox.addEventListener('change', ()=>{
        todo.completed = checkbox.checked
        updateStorage()
    })

    todoElement.appendChild(checkbox) 
    return todoElement
}


// ------------------------- Utility Functions -----------------------

function loadTodos(): void{
    for(let todo of todos)
        todoList.appendChild(createTodoElement(todo))
}

function updateStorage(): void{
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
}

// addBtn?.addEventListener("click", ()=>{
//     console.log(todoInput.value )
// })



// todoInput.addEventListener('change', ()=>{
//     console.log(todoInput.value)
// })


const mystery: unknown = "String"

// Type Assertion
const numChars = (mystery as string).length