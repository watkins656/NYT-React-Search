import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Saved from "./pages/Saved";
import Search from "./pages/Search";
import Home from "./pages/Home";


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/saved" component={Saved} />
          <Route exact path="/search" component={Search} />
          <Route component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
