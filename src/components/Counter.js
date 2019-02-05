import React from 'react';


class Counter extends React.Component {
    state = {
        count: 0
    }

    handlePlus = () => {
        this.setState({
            count: this.state.count + 1
        });
    }

    handleMinus = () => {
        this.setState({
            count: this.state.count - 1
        });
    }

        render() {
            return(
                <div>
                    <span>{this.state.count}</span>                
                    <button onClick={this.handlePlus}>+</button>
                    <button onClick={this.handleMinus}>-</button>
                </div>
            );
    }
}

export default Counter;