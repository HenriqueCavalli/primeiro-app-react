// Importando o React
import React, { useEffect } from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Card } from 'react-materialize';
import { NavLink } from 'react-router-dom'
import erro404 from '../../images/erro404_2.gif';

const NotFound = ({setbackground}) => {
  useEffect(()=>{
    setbackground('#212121 grey darken-4')
    return(()=>{
      setbackground('#eee')
    })
  },[])
  return(
    <Card className='#212121 grey darken-4'>
      <Row className="center-align">
        <Col s={12}>
            <img src={erro404} className="responsive-img" />
        </Col>
      </Row>
      <Row className="center-align">
        <NavLink to="/"className="btn grey">Home</NavLink>
      </Row>
    </Card>
  )
};

export default NotFound;