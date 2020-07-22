import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "../src/pages/Home";
import Rooms from "../src/pages/Rooms";
import Error from "../src/pages/Error";
import SingleRoom from "../src/pages/SingleRoom";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/rooms/" component={Rooms} exact />
        <Route path="/rooms/:slug" component={SingleRoom} exact />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
