import React from 'react';


class Counter extends React.Component {
    state = {
        value: this.props.value
    }

    handlePlus = () => {
        this.setState({
            value: this.state.value + 1
        });
    }

    handleMinus = () => {
        this.setState({
            value: this.state.value - 1
        });
    }

    counterFormat = () => {
        const { value } = this.state;
        return value === 0 ? "ZERO" : value;
    }

    render() {
        return(
            <div>
                <span>{this.counterFormat()}</span>                
                <button onClick={this.handlePlus}>+</button>
                <button onClick={this.handleMinus}>-</button>
            </div>
        );
    }
}

export default Counter;