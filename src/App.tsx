import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import List from "./component/List";
import addIklan from "./component/addIklan";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={List} />
        <Route exact path="/addIklan" component={addIklan} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
