import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import "./style.css"
import NavBar from "./components/navBar/NavBar";
import Projects from "./pages/projects/Projects";
import About from "./pages/About";
import Footer from './components/footer/Footer';

function App() {
  return (
    <Router >
      <div className="wholePage">
        <NavBar />
        <div className="page-container">
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
