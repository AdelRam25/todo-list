import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, deleteTask, toggleComplete }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-black">
      <h3 className="text-2xl font-semibold text-black mb-4">Task List</h3>
      {tasks.length === 0 ? (
        <p className="text-gray-500">No tasks available</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              deleteTask={deleteTask}
              toggleComplete={toggleComplete}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
