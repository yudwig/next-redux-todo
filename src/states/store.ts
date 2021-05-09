import { combineReducers, createStore } from "redux";
// eslint-disable-next-line import/no-extraneous-dependencies
import { composeWithDevTools } from "redux-devtools-extension";
import tasks from "./tasks/reducers";

export default function configureStore(states: any) {
  const reducers = combineReducers({ tasks });
  const composedEnhancers = composeWithDevTools();
  return createStore(reducers, states, composedEnhancers);
}
