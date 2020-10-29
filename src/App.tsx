import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import Hoge from "./components/hoge/Hoge";
// import Fuga from "./components/fuga/Fuga";
const Hoge = lazy(() => import("./components/hoge/Hoge"));
const Fuga = lazy(() => import("./components/fuga/Fuga"));

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
            <Suspense fallback={<div>Loading Hoge....</div>}>
              <Hoge />
            </Suspense>
          </Route>
          <Route exact path="/fuga">
            <Suspense fallback={<div>Loading Fuga...</div>}>
              <Fuga />
            </Suspense>
          </Route>
          <Route path="/">
            <div>Home</div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
