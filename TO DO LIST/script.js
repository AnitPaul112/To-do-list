
const inputBox = document.querySelector('#inputBox');  
const addBtn = document.querySelector('#addBtn');      
const todoList = document.querySelector('#todoList');  


const addTodo = () => {
    const todoText = inputBox.value.trim();  
    if (todoText === '') {
        alert('Please enter a todo item');  
    } else {
        const newTodo = document.createElement('li'); 
        newTodo.classList.add('todo-item');  
        
        const p = document.createElement('p'); 
        p.innerHTML = todoText;  
        newTodo.appendChild(p);  

        const deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = 'Remove';
        deleteBtn.classList.add('btn', 'deleteBtn');
        deleteBtn.addEventListener('click', () => {
            todoList.removeChild(newTodo);
        });
        newTodo.appendChild(deleteBtn);


        const editBtn = document.createElement('button');
        editBtn.innerHTML = 'Edit';
        editBtn.classList.add('btn', 'editBtn');
        editBtn.addEventListener('click', () => {
            const updatedText = prompt('Enter updated todo item', todoText);
            if (updatedText) {
                p.innerHTML = updatedText;
            }
        });
        newTodo.appendChild(editBtn
        );



        todoList.appendChild(newTodo); 
        inputBox.value = '';  
    }
}

const updateTodo = (e) => {
    if (e.target.classList.contains('editBtn')) {
        const todoItem = e.target.parentElement;
        const p = todoItem.querySelector('p');
        const updatedText = prompt('Enter updated todo item', p.innerHTML);
        if (updatedText) {
            p.innerHTML = updatedText;
        }
    }
    console.log(e.target.innerHTML);
}
document.addEventListener('click', (event) => {
    console.log('Clicked element:', event.target);
});



addBtn.addEventListener('click', addTodo);
todoList.addEventListener('click', updateTodo);


