class Task {
	constructor(task, status, id){
		this.task = task
		this.status = status
		this.id = id
	}
}


class ToDoList {
	constructor() {
		this.todos = []
	}
	addTodo(task){
		this.todos.push(task)
	}
	removeTodo(id){
		this.todos = this.todos.filter(function(listItem){
		   return listItem.id !== id;
		})
	}
	showCompletedTasks () {
	  return this.todos.filter(function(listItem){
		return listItem.status === true;
	 })
	}
	showInProgressTask () {
	  return this.todos.filter(function(listItem){
		return listItem.status === false;
	 })
	}

	changeStatus (item){
		this.todos.filter(function(listItem){
			if(listItem.id === item.id){
				return listItem.status = !listItem.status;
			}
		})
	}

	findTasks(string){
		return this.todos.filter((listItem) => {
			if(listItem.task.includes(string)){
				return listItem;
			}
		})	
	}


  }
  
let toDoList = new ToDoList();

let task1 = new Task('to buy milk', true, 'task1');
let task2 = new Task('to buy bread', true, 'task2');
let task3 = new Task('to find yogurt', true, 'task3');
let task4 = new Task('to buy apples', false, 'task4');

console.log(toDoList.todos)

toDoList.addTodo(task1);
toDoList.addTodo(task2);
toDoList.addTodo(task3);
toDoList.addTodo(task4);

toDoList.changeStatus(task2);


console.log(toDoList.showCompletedTasks());
console.log(toDoList.showInProgressTask());

console.log(toDoList.findTasks('bread'));
console.log(toDoList.findTasks('buy'));
console.log(toDoList.findTasks('find'));






