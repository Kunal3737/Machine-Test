const axios = require("axios").default;

const tasksAction = () => {
  return (dispatch) => {
    axios
      .get(
        `http://jsonplaceholder.typicode.com/todos`
      )
      .then((response) => {
        console.log("RESPONSE", response.data);
        response.data &&
          dispatch({
            type: "TASKS_RESPONSE",
            payload: response.data,
          });
      })
      .catch((error) => {
        dispatch({
          type: "TASKS_RESPONSE_ERROR",
          payload: error.message,
        });
      });
  };
};

export default tasksAction;