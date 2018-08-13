import { createStore, applyMiddleware, compose } from "redux";
import { loadState, saveState } from "./localStorage";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const initialState = loadState();
const middleware = [thunk];
const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
