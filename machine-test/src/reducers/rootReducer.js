import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import tasksReducer from "./tasksReducer";

export default combineReducers({
  loginReducer,
  tasksReducer
});
