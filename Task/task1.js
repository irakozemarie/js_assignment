class Task {
    constructor(title, description, dueDate) {
      this.title = title;
      this.description = description;
      this.dueDate = dueDate;
      this.completed = false;
    }
  }
  
  class TaskScheduler {
    constructor() {
      this.tasks = [];
    }
  
    addTask(title, description, dueDate) {
      const newTask = new Task(title, description, dueDate);
      this.tasks.push(newTask);
    }
  
    displayTasksByDueDate() {
      const sortedTasks = this.tasks.slice().sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
      console.log("Tasks sorted by due date:");
      sortedTasks.forEach(task => {
        console.log(`${task.title} - Due: ${task.dueDate}`);
      });
    }
  
    updateTask(title, newDescription, newDueDate) {
      const task = this.findTask(title);
      if (task) {
        task.description = newDescription || task.description;
        task.dueDate = newDueDate || task.dueDate;
        console.log(`Task "${title}" updated.`);
      } else {
        console.log(`Task "${title}" not found in the scheduler.`);
      }
    }
  
    markTaskAsCompleted(title) {
      const task = this.findTask(title);
      if (task) {
        task.completed = true;
        console.log(`Task "${title}" marked as completed.`);
      } else {
        console.log(`Task "${title}" not found in the scheduler.`);
      }
    }
  
    removeTask(title) {
      const index = this.tasks.findIndex(task => task.title === title);
      if (index !== -1) {
        this.tasks.splice(index, 1);
        console.log(`Task "${title}" removed from the scheduler.`);
      } else {
        console.log(`Task "${title}" not found in the scheduler.`);
      }
    }
  
    findTask(title) {
      return this.tasks.find(task => task.title === title);
    }
  }
  
  // Example usage:
  const scheduler = new TaskScheduler();
  
  scheduler.addTask("Complete project", "Finish coding the project", "2024-03-15");
  scheduler.addTask("Study for exam", "Review all chapters", "2024-03-10");
  scheduler.addTask("Go to the gym", "Workout for 1 hour", "2024-03-05");
  
  scheduler.displayTasksByDueDate();
  
  scheduler.updateTask("Study for exam", "Review chapters 3-5", "2024-03-12");
  scheduler.markTaskAsCompleted("Go to the gym");
  
  scheduler.removeTask("Go to the cinema");
  
  scheduler.displayTasksByDueDate();
  