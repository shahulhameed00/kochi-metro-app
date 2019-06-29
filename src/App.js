import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bulma/css/bulma.css";

import Navbar from "./Navbar";
import Home from "./components/Home";
import Stations from "./components/Stations";
import Fare from "./components/Fare";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/stations" component={Stations} />
          <Route path="/fare" component={Fare} />
        </div>
      </Router>
    </div>
  );
}

export default App;
