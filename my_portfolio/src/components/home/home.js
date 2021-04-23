// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Card } from 'react-materialize';

import UserProfile from '../user_profile/user_profile'

import Experience from '../experience/experience'

import company_avatar from '../../images/company.png';
// Importando o avatar da empresa 1
import company_avatar2 from '../../images/company2.png';

const Home = () => (
  <Row>
    <Col m={3} s={12}>
      <UserProfile />
    </Col>
    <Col m={8} s={12}>
        <h5 className="subtitle">Sobre Mim</h5>
        <Card>
          <div>
            <p><b>SUMÁRIO</b></p>
            <p>"Possuo experiência em manutenção de
                computadores (hardware), e também o básico em
                programação full-stack, com HTML5, CSS, JavaScript, JQuery e ReactJS, para 
                o front-end; C++, C, Python e NodeJS para o back-end; e 
                banco de dados SQL.
                Sou apaixonado por tecnologia, e quero aprender cada vez mais."
            </p>
            <br/>
            <p><b>SUMÁRIO</b></p>
            <p>"Possuo experiência em manutenção de
                computadores (hardware), e também o básico em
                programação full-stack, com HTML5, CSS, JavaScript, JQuery e ReactJS, para 
                o front-end; C++, C, Python e NodeJS para o back-end; e 
                banco de dados SQL.
                Sou apaixonado por tecnologia, e quero aprender cada vez mais."</p>
          </div>
        </Card>
        <h5 className="subtitle">Experiencias</h5>
        {/* Passando os parâmetros title, company, description e avatar para o component Experience */}
        <Experience title="Web Developer"
                    company="Soundcloud"
                    description="Aqui deve ir a experiencia na empresa, oque fez, com oque trabalhou etc."
                    avatar={company_avatar}
        />
        <Experience title="React Developer"
                    company="Twitter"
                    description="Aqui deve ir a experiencia na empresa, oque fez, com oque trabalhou etc."
                    avatar={company_avatar2}  
        /> 
    </Col>
  </Row>
);

export default Home;