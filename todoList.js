var todoList = {
  
  todos: [],
  //it should have a method to display todos
  displayTodos: function() {       
    if (this.todos.length===0) {
      console.log(' My todos list is empty.')
    }else{
      console.log('My todos:');
      for (var i = 0; i < this.todos.length; i++) {
        if (this.todos.completed === true) {
          console.log('(x)', this.todos[i].todoText);
        } else {
          console.log('( )', this.todos[i].todoText);
        }        
      }
    }
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
