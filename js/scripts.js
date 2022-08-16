/* Seleção de elementos */

const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEditBtn = document.querySelector("#cancel-edit-btn");

/* Funções */



/* Eventos */

const saveTodo = (text) => {
    
    const todo = document.createElement("div");
    todo.classList.add("todo");

    const todoTitle = document.createElement("h3");
    todoTitle.innerText = text;
    todo.appendChild(todoTitle);
    
    const doneBtn = document.createElement("button")
    doneBtn.classList.add("finish-todo")
    doneBtn.innerHTML = "<i class='fa-solid fa-check'></i>"
    todo.appendChild(doneBtn)

    const editBtn = document.createElement("button")
    editBtn.classList.add("edit-todo")
    editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>'
    todo.appendChild(editBtn)

    const deleteBtn = document.createElement("button")
    deleteBtn.classList.add("remove-todo")
    deleteBtn.innerHTML = "<i class='fa-solid fa-xmark'></i>"
    todo.appendChild(deleteBtn)

    todoList.appendChild(todo);
    todoInput.value = "";
    todoInput.focus();

};


todoForm.addEventListener("submit", (e) => {
    e.preventDefault(); //vai prevenir que o formulário não seja enviado ao clicar no botão

    const inputValue = todoInput.value  //pegar o texto que o usuário digita
    if(inputValue)
    {
        saveTodo(inputValue);
    }
    
})

document.addEventListener("click", (e) =>{
    const targetEl = e.target;

    if(targetEl.classlist.contains("finish-todo"))
    {
        console.log("Cliqueiii")
    }
});