import React from "react";
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './Components/Home';
import Resume from './Components/Resume/Resume.js';
import Projects from './Components/Projects/Projects.js';
import Worksamples from './Components/Work Samples/Worksamples.js';
import About from './Components/About/About.js';
import './App.css';
import logo1 from './logo1.jpg';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <div className="navigation">
                        <img src= {logo1} class="logo"/>
                        <Link to="/home" className="item"> Home </Link>
                        <Link to="/resume" className="item"> Resume </Link>
                        <Link to="/projects" className="item"> Projects </Link>
                        <Link to="/work samples" className="item"> Work Samples </Link>
                        <Link to="/about" className="item"> About </Link>
                    </div>
      <Route exact path="/" component={Home}/>
      <Route exact path="/Home" component={Home}/>
      <Route exact path="/Resume" component={Resume} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/work samples" component={Worksamples} />
      <Route exact path="/About" component={About} />

      
    </div>
    </BrowserRouter>
  );
}

export default App;
