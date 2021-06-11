import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./style.css"
import NavBar from "./components/navBar/NavBar";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/skills" component={Skills} />
          <Route exact path="/contact" component={Contact} /> 
      </div>    
    </Router>
  );
}

export default App;
