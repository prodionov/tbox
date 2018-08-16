import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import todoReducer from "./todoReducer";
import sportReducer from "./sportReducer";
import photoReducer from "./photoReducer";

export default combineReducers({
  login: loginReducer,
  todo: todoReducer,
  sport: sportReducer,
  photo: photoReducer
});
