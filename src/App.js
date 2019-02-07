import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './components/Home';
import Test from './components/Test';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Route path="/new" component={Home} />
            <Route path="/test" component={Test} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
