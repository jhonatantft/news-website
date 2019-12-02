import React, { Component } from 'react';
import Routes from './routes';
import Header from './components/Header';
import MenuLinkList from './utils'

import {
  BrowserRouter as Router,
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router >
        <Header>
          {MenuLinkList}
        </Header>
        <Routes />
      </Router>
    )
  }
}

export default App;
