import React, { Component } from 'react';

import { ThemeProvider } from 'styled-components';
import { Wrapper } from './Wrapper';
import { Div } from './Div';
import Cart from './Cart';
import Navbar from './Navbar';
import { connect } from 'react-redux';
import { handleAdd, handleDelete, handleReset, handleDecrement, handleIncrement } from '../../actions/actions';

const theme = {
};

class Home extends Component {
    render() {
        const { counters, loading } = this.props;
        return (
            <ThemeProvider theme={theme}>
                <div>
                    <Wrapper>
                        <Div>
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
        handleIncrement: (counterId) => dispatch(handleIncrement(counterId)),
        handleDecrement: (counterId) => dispatch(handleDecrement(counterId)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);