import { combineReducers, createStore } from "redux";
// eslint-disable-next-line import/no-extraneous-dependencies
import { composeWithDevTools } from "redux-devtools-extension";
import tasksReducer from "./tasks/reducers";

export default function configureStore(states = {}) {
  const reducers = combineReducers({ tasksReducer });
  const composedEnhancers = composeWithDevTools();
  return createStore(reducers, states, composedEnhancers);
}
