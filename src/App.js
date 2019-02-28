import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './components/shopping_cart/Home';
import Test from './components/Test';
import Products from './components/shopping_cart/Products';
import Toolbar from './components/Toolbar/Toolbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Toolbar />
        <BrowserRouter>
          <div>
            <Route path="/new" component={Home} />
            <Route path="/test" component={Test} />
            <Route path="/product" component={Products} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
