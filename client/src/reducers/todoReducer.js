const ADD_TASK = "ADD_TASK";
const COMPLETED_TASK = "COMPLETED_TASK";
let nextTask = 0;

export const addTask = task => ({
  type: ADD_TASK,
  id: nextTask++,
  task,
  completed: false
});

export const completedTask = id => {
  return function(dispatch) {
    dispatch({ type: COMPLETED_TASK, id });
  };
};

let initialState = [];

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TASK:
      return [
        ...state,
        {
          id: action.id,
          task: action.task,
          completed: false
        }
      ];
    case COMPLETED_TASK:
      return state.map(
        task =>
          task.id === action.id ? { ...task, completed: !task.completed } : task
      );
    default:
      return state;
  }
}
