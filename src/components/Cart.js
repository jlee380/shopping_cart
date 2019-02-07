import React, { Component } from 'react';
import { Header } from './Header';
import Counter from './Counter';
import { Button } from 'semantic-ui-react';


class Cart extends Component {
    state = {
        counters: [
            { id: 1, value: 0 },
            { id: 2, value: 0 },
            { id: 3, value: 0 } 
        ]
    }

    handleDelete = (counterId) => {
        const counters = this.state.counters.filter((c) => c.id !== counterId);
        this.setState({ counters })
    }

    handleAdd = () => {
        const newId = this.state.counters.length + 1;

        this.setState({ counters: [...this.state.counters, { id: newId, value: 0}] })
    }

    styles = {
        margin: '30px',
        padding: '100px'
    }

    render() {
        return(
            <div>
                <Header>Total Number</Header>
                <Button basic color='black' content='Reset' />
                <Button basic color='green' content='Add' onClick={this.handleAdd} />
                {
                    this.state.counters.length === 0 ? "Empty" : this.state.counters.map(counter => (
                        <Counter value={counter.value} key={counter.id} id={counter.id} onDelete={this.handleDelete} />
                    ))
                }
            </div>
        );
    }
}

export default Cart;