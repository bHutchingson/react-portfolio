import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./style.css"
import NavBar from "./components/navBar/NavBar";

function App() {
  return (
    <Router>
          <NavBar />          
    </Router>
  );
}

export default App;
