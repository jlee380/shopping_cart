import React, { Component } from 'react';

import { ThemeProvider } from 'styled-components';
import { Wrapper } from './Wrapper';
import { Div } from './Div';
import Cart from './Cart';

const theme = {
    
  };

class Home extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <div>
                    <Wrapper>
                        <Div>
                            <Cart></Cart>
                        </Div>
                    </Wrapper>
                </div>
            </ThemeProvider>
        );
    }
}

export default Home;