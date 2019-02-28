import React, { Component } from 'react'
import './Toolbar.css';
import styled from 'styled-components';

export default class Toolbar extends Component {
  render() {
    return (
      // <Div>
      //   <Nav>

      //   </Nav>
      // </Div>
      <div className="navDiv">
        <nav className="mainNav">
          <ul className="ul">
            <li><a>Home</a></li>
            <li><a>Product</a></li>
            <li><a>New</a></li>
            <li><a>New</a></li>
            <li><a>New</a></li>
          </ul>
        </nav>
      </div>
    )
  }
}

const Div = styled.div`
    color: white;
    font-size: 20px;
    box-sizing: border-box;
    font-family: "Dosis", sans-serif; 
`;

const Nav = styled.nav`
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    margin: 2em;
`;

