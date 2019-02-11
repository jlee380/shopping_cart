import React, { Component } from 'react';

import { ThemeProvider } from 'styled-components';
import { Wrapper } from './Wrapper';
import { Div } from './Div';
import Cart from './Cart';
import Navbar from './Navbar';
import CustomApp from './CustomApp';

const theme = {
    
};

class Home extends Component {
    styles = { 
        height: '50px',
        width: '100%',
        background: 'gray'
    }

    render() {
        return (
            <ThemeProvider theme={theme}>
                <div>
                    <Wrapper>
                        <Div>
                            <CustomApp>
                                <Navbar></Navbar>
                                <Cart></Cart>
                            </CustomApp>
                        </Div>
                    </Wrapper>
                </div>
            </ThemeProvider>
        );
    }
}

export default Home;