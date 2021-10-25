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
        {/* <Route path="/signup" component={Signup} /> */}
        <Route path="/login" component={Login} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
