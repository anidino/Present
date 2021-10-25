import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
// import Signup from "./pages/Signup";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        {/* <Route exact path="/signup" component={Signup} /> */}
      </Switch>
    </div>
  );
}

export default App;
