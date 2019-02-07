import React from 'react';
import { Button, Label } from 'semantic-ui-react';

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

    styles = {
        margin: '10px',
    }

    render() {
        let colors = this.state.value === 0 ? 'yellow' : 'black';

        return(
            <div>
                <Label as='a' color={colors} tag>{this.counterFormat()}</Label>                
                <Button style={this.styles} onClick={this.handlePlus}>+</Button>
                <Button style={this.styles} onClick={this.handleMinus}>-</Button>
                <Button basic color='red' onClick={() => this.props.onDelete(this.props.id)}>Delete</Button>
            </div>
        );
    }
}

export default Counter;