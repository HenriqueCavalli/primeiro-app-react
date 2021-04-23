// Importantando o React
import React, { useState } from "react";
// Importantando o component Home
import Home from "./components/home/home";
// Importantando o component Contact
import Contact from "./components/contact/contact";

import NotFound from "./components/notfound/notfound";
// Importando os components necessárias da lib react-materialize
import { Container } from 'react-materialize';
// Importanto o component <Switch /> e <Route /> da nossa Lib de rotas
import { Switch, Route } from 'react-router-dom'

const Main = () => {
  const [background, setbackground] = useState('#eee')
  return(
    <main>
      <div className={background}>
        <Container>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/contact' component={Contact}/>
            <Route path='*' component={()=> <NotFound setbackground={setbackground}/>}/>
          </Switch>
        </Container>
      </div>
    </main>  
  )
};


export default Main;