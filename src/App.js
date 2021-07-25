import React from "react";
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './Components/Home/Home.js';
import Resume from './Components/Resume/Resume.js';
import Projects from './Components/Projects/Projects.js';
import Worksamples from './Components/Work Samples/Worksamples.js';
import About from './Components/About/About.js';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">

      <Route exact path="/" component={Home}/>
      <Route exact path="/Resume" component={Resume} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/work samples" component={Worksamples} />
      <Route exact path="/About" component={About} />

      
    </div>
    </BrowserRouter>
  );
}

export default App;
