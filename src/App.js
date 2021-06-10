import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./style.css"
import NavBar from "./components/navBar/NavBar";
import Contact from "./pages/contact";
import Skills from "./pages/skills";
import Projects from "./pages/projects";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
          <Route exact path="/" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/skills" component={Skills} />
          <Route exact path="/contact" component={Contact} /> 
      </div>    
    </Router>
  );
}

export default App;
