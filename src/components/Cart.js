import React, { Component } from 'react';
import Counter from './Counter';
import { Button } from 'semantic-ui-react';


class Cart extends Component {
    styles = {
        margin: '30px',
        padding: '100px'
    }

    render() {
        const { loading, counters, handleReset, handleIncrement, handleDecrement, handleAdd, handleDelete } = this.props;
        return (
                <div>
                    {loading ? <div>loading...</div> : 
                        <div>
                        <Button
                            onClick={handleReset}
                            basic color='black'
                            content='Reset'
                        />
                        <Button
                            basic color='green'
                            content='Add'
                            onClick={handleAdd}
                        />
                        {
                        counters.length === 0 ? "Empty" : counters.map(counter => (
                            <Counter
                                key={counter.id}
                                onDelete={handleDelete}
                                handleIncrement={handleIncrement}
                                handleDecrement={handleDecrement}
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