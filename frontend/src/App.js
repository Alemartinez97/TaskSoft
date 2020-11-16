import "./App.css";
import React,{useEffect} from "react";
import { Provider } from "react-redux";
import { SnackbarProvider } from 'notistack';
import Table from './components/table'
import Login from './components/login'
import store from "./components/store/index";
import Menu from './components/menu'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import api from "./components/utils/api";
import { connect } from "react-redux";
import { addTask } from "./components/actions/index";

import routes from "./components/routes";
import SearchAppBar from "./components/forms/SearchAppBar";

const App = connect(
  null,
  mapDispatchToProps
)(props => {
  useEffect(() => {
    api.get("/api/task").then(result => {
      props.addTask(result.data);
    });
  });
  return (
    <BrowserRouter>
    <Menu></Menu>
      <Switch>
        <Route exact path={routes.task} component={Table} />
        <Route exact path={routes.login} component={Login} />
      </Switch>
    </BrowserRouter>
  );
});
function mapDispatchToProps(dispatch) {
  return {
    addTask: task => dispatch(addTask(task))
  };
}
const ConnectedApp = props => {
  return (
    <Provider store={store}>
          <SnackbarProvider>    
      <SearchAppBar/>
      <App />
      </SnackbarProvider>    
    </Provider>
  );
};
export default ConnectedApp;


