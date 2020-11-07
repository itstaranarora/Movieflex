import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/home/home";
import About from "./pages/About/About";
import Movie from "./pages/Movie/Movie";
import Explore from "./pages/Explore/Explore";
import Login from "./pages/Login/Login";

const Routes = ({ user }) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/explore">
          <Home user={user} />
        </Route>
        <Route path="/movie/:id" component={Movie} />
        <Route path="/about" component={About} />
        <Route path="/login" component={Login} />
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
