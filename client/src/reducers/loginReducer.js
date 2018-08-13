import { addUser } from "../utils/addUser";

const LOGIN_USER = "LOGIN_USER";

export function loginUserAction(params) {
  return function(dispatch) {
    addUser("./login", params).then(result => {
      if (result.result === "success") {
        dispatch({
          type: LOGIN_USER,
          payload: { isLoggedin: true, username: params.username }
        });
      } else {
        alert("ther is no such user");
      }
    });
  };
}

const initialState = {
  isLoggedin: false,
  username: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        isLoggedin: action.payload.isLoggedin,
        username: action.payload.username
      };
    default:
      return state;
  }
}
