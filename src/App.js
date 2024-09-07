import React, { useState } from 'react';

function Task({ task, onToggleComplete, onDelete }) {
  return (
    <div>
      <input
        type="checkbox"
        checked={task.isCompleted}
        onChange={() => onToggleComplete(task.id)}
      />
      <span>{task.text}</span>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
}

function TaskList() {
  const [tasks, setTasks] = useState([
    // Example initial state
    { id: 1, text: "Do homework", isCompleted: false },
    { id: 2, text: "Go grocery shopping", isCompleted: false },
  ]);

  const addTask = (taskText) => {
    // Add a new task with a unique ID and default isCompleted to false
  };

  const toggleComplete = (id) => {
    // Toggle the isCompleted state of the task with the given id
  };

  const deleteTask = (id) => {
    // Remove the task with the given id from the tasks array
  };

  return (
    <div>
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
  );
}


function App() {
  return (
    <div>
      <h1>To-Do List</h1>
    </div>
  );
}

export default App;
