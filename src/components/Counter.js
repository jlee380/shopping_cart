import React from 'react';
import { Button, Label } from 'semantic-ui-react';

class Counter extends React.Component {
    counterFormat = () => {
        const { value } = this.props.counter;
        return value === 0 ? "ZERO" : value;
    }

    styles = {
        margin: '10px',
    }

    render() {
        const colors = this.props.counter.value === 0 ? 'yellow' : 'black';
        const { handleIncrement, handleDecrement, handleDelete, counter } = this.props;
        return(
            <div>
                <Label as='a' color={colors} tag>{this.counterFormat()}</Label>                
                <Button
                    style={this.styles}
                    onClick={() => handleIncrement(counter)}
                >+
                </Button>
                <Button
                    style={this.styles}
                    onClick={() => handleDecrement(counter)}
                >-
                </Button>
                <Button
                    basic color='red'
                    onClick={() => handleDelete(counter.id)}
                >Delete
                </Button>
            </div>
        );
    }
}

export default Counter;