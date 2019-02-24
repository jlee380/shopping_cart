import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        const { counters } = this.props;
        return (
            <div>
                Total Number
                {counters.length}
            </div>
        );
    }
}

export default Navbar;