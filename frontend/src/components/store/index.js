import { createStore, combineReducers} from "redux";

import task from "../reducers/task";

const reducers = combineReducers({ task });

const store = createStore(
    reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
