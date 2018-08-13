import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import todoReducer from "./todoReducer";
import sportReducer from "./sportReducer";

export default combineReducers({
  login: loginReducer,
  todo: todoReducer,
  sport: sportReducer
});
