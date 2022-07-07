import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import HomePage from './components/HomePage';

function App() {
  return (
    <Router>
      <div style={{ backgroundColor: "#ffff", margin: "0" }}>

          <Route path="/" exact component={HomePage}></Route>

      </div>
    </Router>
  );
}
export default App;
