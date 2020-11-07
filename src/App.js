import React from "react";
import Home from "./pages/home/home";
import "./App.css";
import { auth } from "./firebase";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./pages/About/About";
import Movie from "./pages/Movie/Movie";
import Login from "./pages/Login/Login";

function App() {
  const [user, setUser] = React.useState(null);
  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);
  // console.log(user);
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
