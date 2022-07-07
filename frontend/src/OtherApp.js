import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import HomePage from './components/HomePage';


export default class App extends Component {
    render() {
      return (
        <RequestContextProvider baseURL={"http://localhost:8000/"}>
          <UserContextProvider>
            <BrowserRouter>
              <div style={{ backgroundColor: "#ffff", margin: "0" }}>

                    <Route path="/" exact component={HomePage}></Route>

              </div>
            </BrowserRouter>
          </UserContextProvider>
        </RequestContextProvider>
      );
    }
}
  