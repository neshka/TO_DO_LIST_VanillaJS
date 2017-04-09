var todoList = {
  
  todos: ['item 1','item 2','item 3'],
  //it should have a method to display todos
  displayTodos: function() {
    console.log('My todo: ', this.todos);
  },

  //it should have a method to add a new todo
  addTodo: function(todo){
    this.todos.push(todo);
    this.displayTodos();
  },
  
  //it should have a function to change todo
  changeTodo: function(position,newValue){
    this.todos[position]=newValue;
    this.displayTodos();
  },
  
  //it should have a function to delete todo
  deleteTodo: function(position){
    this.todos.splice(position,1);
    this.displayTodos();
  }
  
};
