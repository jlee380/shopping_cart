import React, { Component } from 'react'
import './Toolbar.css';
import { Link } from 'react-router-dom';
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
            <li><Link to='/mainHome'>Home</Link></li>
            <li><Link to='/projects'>Projects</Link></li>
            <li><Link to='/home'>New</Link></li>
            <li><Link to='/'>New</Link></li>
            <li><Link to='/'>New</Link></li>
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

