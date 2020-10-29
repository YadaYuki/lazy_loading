import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Hoge from "./components/hoge/Hoge"
import Fuga from "./components/fuga/Fuga"

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/hoge">hoge</Link>
            </li>
            <li>
              <Link to="/fuga">fuga</Link>
            </li>
            <li>
              <Link to="/">home</Link> 
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/hoge">
            <Hoge />
          </Route>
          <Route exact path="/fuga">
            <Fuga />
          </Route>
          <Route path="/">
            <div>
              Home
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
