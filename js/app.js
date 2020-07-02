const todoInput = document.querySelector('.todo-input');
const todoBtn = document.querySelector('.todo-btn');
const todoList = document.querySelector('.todo-list');

//1. on click fire the function 'addTodo'
todoBtn.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);

function addTodo(event){
    //2. prevent form from submitting to server
    event.preventDefault();
    //3. create an element in the document called 'div' with the binding as a constant called 'todoDiv'
    const todoDiv = document.createElement('div');
    //4. add the class 'todo' to the previous element 'div'
    todoDiv.classList.add('todo');
    //5. create an element in the document called 'newTodo' with the binding as a constant called 'newTodo'
    const newTodo = document.createElement('li');
    //6. grab the value of todoInput (line 16 in the dom) and display it inside the list item 'newTodo' as text
    newTodo.innerText = todoInput.value;
    //7. thia adds the class 'todo-item' to the element 'li' (where the user input gets displayed)
    newTodo.classList.add('todo-item');
    //8. place the 'newTodo' list item as the child of the parent 'todoDiv'
    todoDiv.appendChild(newTodo);

    //CHECKMARK BUTTON AND TRASH BUTTON
    //9. creates an element called 'checkBtn'
    const checkBtn = document.createElement('button');
    //10. give 'checkBtn' an HTML value with the fontawesome checkmark
    checkBtn.innerHTML = '<i class="fas fa-check"></i>';
    //11. give the 'checkBtn' element a class of 'check-btn' (mainly for styling)
    checkBtn.classList.add('check-btn');
    //12. place the 'checkBtn' as the child of the parent 'todoDiv'
    todoDiv.appendChild(checkBtn);
    //trash button
    const trashBtn = document.createElement('button');
    trashBtn.innerHTML = '<i class="fas fa-trash"></i>';
    trashBtn.classList.add('trash-btn');
    todoDiv.appendChild(trashBtn);
    
    //13. append 'todoDiv' to the parent 'todoList'
    todoList.appendChild(todoDiv);

    //CLEAR THE INPUT VALUE
    todoInput.value = "";
}

function deleteCheck (event){
    const item = event.target;
    //delete todo
    if (item.classList[0] === 'trash-btn'){
        const todo = item.parentElement;
        todo.remove();
    }
    //delete check
    if (item.classList[0] === 'check-btn'){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}

