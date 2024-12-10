import React, { useState } from 'react';
import TaskList from './TaskList';

const TaskForm = ({ tasks, addTask, deleteTask, toggleComplete }) => {
  const [taskName, setTaskName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName) {
      addTask(taskName);
      setTaskName('');
    }
  };
  

  return (
    <div>
      <h1 className="text-xl font-bold text-center mb-4">To-Do List</h1>
      <form onSubmit={handleSubmit} className="flex justify-center mb-4">
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          placeholder="Enter task"
          className="border p-2 w-1/2"
        />
        <button type="submit" className="bg-black text-white p-2 ml-2">
          Add Task
        </button>
      </form>
      <TaskList tasks={tasks}  deleteTask={deleteTask} toggleComplete={toggleComplete} />
    </div>
  );
};

export default TaskForm;
