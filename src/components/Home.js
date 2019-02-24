import React, { Component } from 'react';

import { ThemeProvider } from 'styled-components';
import { Wrapper } from './Wrapper';
import { Div } from './Div';
import Cart from './Cart';
import Navbar from './Navbar';
import { connect } from 'react-redux';
// import CustomApp from './CustomApp';
import { handleAdd, handleDelete, handleReset } from '../actions/actions';

const theme = {
    
};

class Home extends Component {
    // async componentDidMount() {
    //     const url = 'http://ec2-13-58-24-120.us-east-2.compute.amazonaws.com/';
    //     const response = await fetch(url).then()
    //     const counters = await response.json();
    //     console.log(data);
    // }

    // handleDelete = (counterId) => {
    //     const counters = this.state.counters.filter((c) => c.id !== counterId);
    //     this.setState({ counters })
    // }

    // handleAdd = () => {
    //     const newId = this.props.counters.length + 1;
        
    //     this.setState({ counters: [...this.props.counters, { id: newId, value: 0}] })
    // }
    // handleReset = () => {
    //     const counters = this.state.counters.map((counter) => {
    //         counter.value = 0;
    //         return counter;
    //     });
 
    //     this.setState({ counters });
    // }

    // handleIncrement = (counter) => {
    //     const counters = [...this.state.counters];
    //     const index = counters.indexOf(counter);
    //     counters[index] = {...counter};
    //     counters[index].value++;

    //     this.setState({ counters });
    // }

    // handleDecrement = (counter) => {
    //     const counters = [...this.state.counters];
    //     const index = counters.indexOf(counter);
    //     counters[index] = {...counter}
    //     counters[index].value--;
        
    //     this.setState({ counters });
    // }
    render() {
        const { counters, loading } = this.props;
        return (
            <ThemeProvider theme={theme}>
                <div>
                    <Wrapper>
                        <Div>
                            {/* <CustomApp> */}
                                <Navbar counters={counters}></Navbar>
                                <Cart
                                    loading={loading}
                                    counters={counters}
                                    handleReset={this.props.handleReset}
                                    handleIncrement={this.props.handleIncrement}
                                    handleDecrement={this.props.handleDecrement}
                                    handleAdd={this.props.handleAdd}
                                    handleDelete={this.props.handleDelete}
                                />
                            {/* </CustomApp> */}
                        </Div>
                    </Wrapper>
                </div>
            </ThemeProvider>
        );
    }
}

const mapStateToProps = (state) => {
    return { counters: state.counters };
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleAdd: () => dispatch(handleAdd()),
        handleDelete: (counterId) => dispatch(handleDelete(counterId)),
        handleReset: () => dispatch(handleReset()),

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);