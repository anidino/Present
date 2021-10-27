import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <PrivateRoute path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
