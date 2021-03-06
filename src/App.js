import React, { Component } from "react";
import "uswds/dist/css/uswds.css";
import "./App.css";
import { Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Map from "./Components/Map/Map";
import Camera from "./Components/Camera/Camera";
import Landing from "./Components/Landing/Landing";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Route path="/" exact component={Landing}/>
        <Route path="/about" exact component={About} />
        <Route path="/SNAP" exact component={Camera} />
        <Route path="/MAP" exact component={Map} />
      </div>
    );
  }
}

export default App;
