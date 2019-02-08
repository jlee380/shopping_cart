import React, { Component } from 'react';
import { Header } from './Header';
import Counter from './Counter';
import { Button } from 'semantic-ui-react';


class Cart extends Component {
    state = {
        loading: 0,
        counters: [
            { id: 1, value: 0 },
            { id: 2, value: 0 },
            { id: 3, value: 0 } 
        ]
    }

    // componentDidMount() {
    //     const url = 'http://10.2.204.26:3000/';
    // }

    handleDelete = (counterId) => {
        const counters = this.state.counters.filter((c) => c.id !== counterId);
        this.setState({ counters })
    }

    handleAdd = () => {
        const newId = this.state.counters.length + 1;

        this.setState({ counters: [...this.state.counters, { id: newId, value: 0}] })
    }

    handleReset = () => {
        const counters = this.state.counters.map((counter) => {
            counter.value = 0;
            return counter;
        });
 
        this.setState({ counters });
    }

    handleIncrement = (counter) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value++;

        this.setState({ counters });
    }

    styles = {
        margin: '30px',
        padding: '100px'
    }

    render() {
        return (
                <div>
                    {this.state.loading ? <div>loading...</div> : 
                        <div>
                        <Header>Total Number</Header>
                        <Button 
                            onClick={this.handleReset}
                            basic color='black'
                            content='Reset'
                        />
                        <Button
                            basic color='green'
                            content='Add'
                            onClick={this.handleAdd}
                        />
                        {
                        this.state.counters.length === 0 ? "Empty" : this.state.counters.map(counter => (
                            <Counter 
                                key={counter.id}
                                onDelete={this.handleDelete}
                                onIncrement={this.handleIncrement}
                                counter={counter}
                            />
                        ))
                        }
                    </div>
                    }
                </div>
        );
    }
}

export default Cart;