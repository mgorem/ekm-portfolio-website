import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavBarStyles = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100vw;
  padding: 1rem 0;
  background: var(--dark-bg);
  ul {
    max-width: 1200px;
    margin: 0 auto;
    width: 90%;
    text-align: center;
    li {
      display: inline-block;
      align-items: center;
      border-radius: 8px;
      transition: 0.3s ease background-color;
      &:hover {
        background-color: var(--deep-black);
      }
    }
    a {
      display: inline-block;
      font-size: 'RobotoMono Regular';
      padding: 1rem 1rem;
      font-size: 2rem;
      color: var(--gray-1);
      outline: none;
    }
  }
`;

const NavBar = () => (
  <NavBarStyles>
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
    </ul>

    <ul>
      <li>
        <NavLink to="/photodecor">PhotoDecor</NavLink>
      </li>
    </ul>

    <ul>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </ul>
  </NavBarStyles>
);

export default NavBar;
