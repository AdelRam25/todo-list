import React, { useReducer } from "react";
import todoReducer from "./store/TodoReducer";
import TaskForm from "./components/TaskForm";

const App = () => {
  const [tasks, dispatch] = useReducer(todoReducer, []);

  const addTask = (taskName) => {
    if (taskName) {
      dispatch({
        type: "add_task",
        payload: { name: taskName, completed: false },
      });
    }
  };

  const deleteTask = (id) => {
    dispatch({ type: "delete_task", payload: id });
  };

  const toggleComplete = (id) => {
    dispatch({ type: "toggle_complete", payload: id });
  };

  return (
    <div className="container mx-auto p-4">
      <TaskForm
        tasks={tasks}
        addTask={addTask}
        deleteTask={deleteTask}
        toggleComplete={toggleComplete}
      />
    </div>
  );
};

export default App;
