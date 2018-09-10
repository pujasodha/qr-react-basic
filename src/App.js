import React, { Component } from "react";
import "./App.css"
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Reader from "./Component/Reader/reader";

class App extends Component {
  render() {
    return (

      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={ Reader } />
          </Switch>
       
        </div>
      </Router>
    );
  }
}

export default App;