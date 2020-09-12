import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/">
          <Header />
          <Home />
        </Route>
      </Router>
    </div>
  );
}

export default App;
