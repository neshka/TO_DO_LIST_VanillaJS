var todoList = {
  
  todos: [],
  //it should have a method to display todos
  displayTodos: function() {
    console.log('My todo: ', this.todos);
  },

  //it should have a method to add a new todo
  addTodo: function(todoText){
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },
  
  //it should have a function to change todo
  changeTodo: function(position,todoText){
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },

  //it should change completed property
  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  },
  
  //it should have a function to delete todo
  deleteTodo: function(position){
    this.todos.splice(position,1);
    this.displayTodos();
  }
  
};
