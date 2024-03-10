class Task {
    constructor(description, category) {
      this.description = description;
      this.category = category;
      this.completed = false;
    }
  }
  
  class ToDoList {
    constructor() {
      this.tasks = [];
    }
  
    addTask(description, category) {
      const newTask = new Task(description, category);
      this.tasks.push(newTask);
    }
  
    displayTasksByCategory() {
      const tasksByCategory = {};
  
      this.tasks.forEach(task => {
        if (!tasksByCategory[task.category]) {
          tasksByCategory[task.category] = [];
        }
        tasksByCategory[task.category].push(task);
      });
  
      console.log("Tasks by Category:");
      for (const category in tasksByCategory) {
        console.log(`${category}:`);
        tasksByCategory[category].forEach(task => {
          console.log(`- [${task.completed ? "x" : " "}] ${task.description}`);
        });
      }
    }
  
    markTaskAsCompleted(description) {
      const task = this.findTask(description);
      if (task) {
        task.completed = true;
        console.log(`Task "${description}" marked as completed.`);
      } else {
        console.log(`Task "${description}" not found in the ToDo list.`);
      }
    }
  
    removeTask(description) {
      const index = this.tasks.findIndex(task => task.description === description);
      if (index !== -1) {
        this.tasks.splice(index, 1);
        console.log(`Task "${description}" removed from the ToDo list.`);
      } else {
        console.log(`Task "${description}" not found in the ToDo list.`);
      }
    }
  
    findTask(description) {
      return this.tasks.find(task => task.description === description);
    }
  }
  
  // Example usage:
  const toDoList = new ToDoList();
  
  toDoList.addTask("Buy groceries", "Personal");
  toDoList.addTask("Finish project report", "Work");
  toDoList.addTask("Go for a run", "Fitness");
  toDoList.addTask("Call mom", "Personal");
  
  toDoList.displayTasksByCategory();
  
  toDoList.markTaskAsCompleted("Buy groceries");
  toDoList.markTaskAsCompleted("Go for a run");
  
  toDoList.removeTask("Call dad");
  toDoList.removeTask("Finish project report");
  
  toDoList.displayTasksByCategory();