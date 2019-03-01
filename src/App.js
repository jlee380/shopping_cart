import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/shopping_cart/Home';
import MainHome from './components/Home/MainHome';
import Test from './components/Test';
import Projects from './components/shopping_cart/Projects/Projects';
import Toolbar from './components/Toolbar/Toolbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Toolbar />
              <Route path="/MainHome" component={MainHome} />
              <Route path="/test" component={Test} />
              <Route path="/Projects" component={Projects} />
              <Route path="/Home" component={Home} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
