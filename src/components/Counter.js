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
        let colors = this.props.counter.value === 0 ? 'yellow' : 'black';

        return(
            <div>
                <Label as='a' color={colors} tag>{this.counterFormat()}</Label>                
                <Button
                    style={this.styles}
                    onClick={() => this.props.onIncrement(this.props.counter)}
                >+
                </Button>
                <Button
                    style={this.styles}
                    onClick={this.handleMinus}
                >-
                </Button>
                <Button
                    basic color='red'
                    onClick={() => this.props.onDelete(this.props.counter.id)}
                >Delete
                </Button>
            </div>
        );
    }
}

export default Counter;