var todos = ['item 1', 'item 2', 'item 3'] //creating variables

function displayTodos() { 
	console.log(todos);
}

function addTodo(todo){
	todos.push(todo);
	displayTodos();
}

//change todo function
function changeTodo (position, newValue) {
	todos[position] = newValue;
	displayTodos();
}

