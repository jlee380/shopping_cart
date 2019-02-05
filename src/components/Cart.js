import React, { Component } from 'react';
import { Header } from './Header';
import Counter from './Counter';


class Cart extends Component {
    render() {
        return(
            <div>
                <Header>Total Number</Header>
                <button>reset</button>
                <Counter></Counter>
            </div>
        );
    }
}

export default Cart;