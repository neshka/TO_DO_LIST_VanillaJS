var todos = ['item 1', 'item 2', 'item 3'] //creating variables

//it should have a function to display todos
function displayTodos() { 
	console.log(todos);
}


//it should have a function to add a new todo
function addTodo(todo){
	todos.push(todo);
	displayTodos();
}

//it should have a function to change todo
function changeTodo (position, newValue) {
	todos[position] = newValue;
	displayTodos();
}

//it should have a function to delete todo
function deleteTodo (startPosition){
	todos.splice(startPosition,1);
	displayTodos();
}

