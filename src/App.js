import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Allposts from "./Components/Allposts";
import Landing from "./Components/Landing";
import Discussion from "./Components/Discussion";
import Header from "./Helpers/Header";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Header />
            <Landing />
          </Route>
          <Route path="/register">
            <Header />
            <Register />
          </Route>
          <Route path="/login">
            <Header />
            <Login />
          </Route>
          <Route path="/all_posts">
            <Header />
            <Allposts />
          </Route>
          <Route path="/posts/:post-id">
            <Header />
            <Discussion />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
