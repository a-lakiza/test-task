import React from 'react';
import HomePage from './components/HomePage';
import FormPage from './components/formPage/FormPage';
import { Route, Switch } from "react-router";

const App = () => {
  return (
    <Switch>
      <Route path='/' exact component={HomePage} />
      <Route path='/form' component={FormPage} />
    </Switch>
  );
}
export default App;
