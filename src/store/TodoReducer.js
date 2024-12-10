const todoReducer = (state, action) => {
  if (action.type == 'add_task') {
    return [...state, action.payload];
  } else if (action.type == 'delete_task') {
    return state.filter((task) => task.id !== action.payload);
  } else if (action.type == 'toggle_complete') {
    return state.map((task) =>
      task.id == action.payload
        ? { ...task, completed: !task.completed }
        : task
    );
  } else {
    return state;
  }
};

export default todoReducer;

