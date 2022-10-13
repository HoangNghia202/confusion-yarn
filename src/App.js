import Main from './components/MainComponent';
import React, { Component } from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import "./App.css";
class App extends Component {

  render() {
    return (
      <Router>
      <div className="App">
        <Main />
      </div>
      </Router>
    );
  }
}

export default App;