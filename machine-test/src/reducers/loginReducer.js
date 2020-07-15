const initialState = {
    userName: '',
    password: "",
  };
  
  const loginReducer = (state = { ...initialState }, action) => {
    switch (action.type) {
      case "LOGIN_ACTION":
        return {
          ...state,
          userName: action.email,
          password: action.password
        };
      default:
        return state;
    }
  };
  
export default loginReducer;
