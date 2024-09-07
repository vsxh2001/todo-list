import React, { useState } from 'react';
import "./App.css";

function Task({ task, onToggleComplete, onDelete }) {
  return (
    <div className='task-item'>
      <input
        type="checkbox"
        checked={task.isCompleted}
        onChange={() => onToggleComplete(task.id)}
      />
      <span className='task-text'>{task.text}</span>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
}

function TaskList() {
  const [tasks, setTasks] = useState([]);

  const toggleComplete = (id) => {
    // Toggle the isCompleted state of the task with the given id
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  const deleteTask = (id) => {
    // Remove the task with the given id from the tasks array
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const addTask = (task_test) => {
    // Add a new task to the tasks array with a unique id and the given text
    let id = tasks.length + 1;
    let newTask = { id: id, text: task_test, isCompleted: false };
    setTasks([...tasks, newTask]);
  };

  const addTaskHandeler = (event) => {
    event.preventDefault();
    let task_test = event.target[0].value;
    addTask(task_test);
    event.target[0].value = "";
  };

  return (
    <div>
      <div className='task-list'>
        {/* Map over tasks to render each one */}
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onToggleComplete={toggleComplete}
            onDelete={deleteTask}
          />
        ))}

        {/* Input and button to add a new task */}
      </div>
      <form onSubmit={addTaskHandeler} className="task-item">
        <input type="text" placeholder="Add a new task" className='task-input' />
        <button type="submit" className='add-button'>Add</button>
      </form>
    </div>
  );
}


function App() {
  return (
    <div>
      <h1>To-Do List</h1>
      <TaskList /> {/* Render the TaskList component */}
    </div>
  );
}

export default App;
