var Todos = ['item 1', 'item 2', 'item 3']

function displayTodos() {
	console.log(Todos);
}

function addTodo(){
	Todos.push('new item');
	displayTodos();
}