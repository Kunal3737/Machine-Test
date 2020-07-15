const initialState = {
  tasksData: "",
  tasksDataError: "",
};

const taskReducer = (state = { ...initialState }, action) => {
  switch (action.type) {
    case "TASKS_RESPONSE":
      return {
        ...state,
        tasksData: action.payload,
      };
    case "TASKS_RESPONSE_ERROR":
      return {
        ...state,
        tasksDataError: action.payload,
      };
    default:
      return state;
  }
};

export default taskReducer;
