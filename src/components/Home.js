import React, { Component } from 'react';

import { ThemeProvider } from 'styled-components';
import { Wrapper } from './Wrapper';
import { Div } from './Div';
import Cart from './Cart';
import Navbar from './Navbar';
// import CustomApp from './CustomApp';

const theme = {
    
};

class Home extends Component {
    state = {
        loading: 0,
        counters: [
            { id: 0, value: 1 },
        ]
    }

    // async componentDidMount() {
    //     const url = 'http://ec2-13-58-24-120.us-east-2.compute.amazonaws.com/';
    //     const response = await fetch(url).then()
    //     const counters = await response.json();
    //     console.log(data);
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

    handleDecrement = (counter) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter}
        counters[index].value--;
        
        this.setState({ counters });
    }
    render() {
        return (
            <ThemeProvider theme={theme}>
                <div>
                    <Wrapper>
                        <Div>
                            {/* <CustomApp> */}
                                <Navbar counters={this.state.counters}></Navbar>
                                <Cart
                                    loading={this.state.loading}
                                    counters={this.state.counters}
                                    handleReset={this.handleReset}
                                    handleIncrement={this.handleIncrement}
                                    handleDecrement={this.handleDecrement}
                                    handleAdd={this.handleAdd}
                                    handleDelete={this.handleDelete}
                                />
                            {/* </CustomApp> */}
                        </Div>
                    </Wrapper>
                </div>
            </ThemeProvider>
        );
    }
}

export default Home;