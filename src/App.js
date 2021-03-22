import './App.css';
import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom"
import NavBar from "./components/NavBar"
import Home from "./components/pages/Home";
import Employees from "./components/pages/Employees";


function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route exact path="/employees" component={Employees} />
      </div>
    </Router>
  );
}

export default App;
