// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Navbar, NavItem, Row} from 'react-materialize';

import { NavLink } from 'react-router-dom'

const Header = () => (
  <Row>  
    <Navbar className="grey darken-2">
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="contact">Contato</NavLink></li>
    </Navbar>
  </Row>
);

export default Header;