import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Header from './componentes/Header/Header';
import Home from './componentes/Home/Home';
import Chevrolet from './componentes/Chevrolet/Chevrolet';
import Fiat from './componentes/Fiat/Fiat';
import Ford from './componentes/Ford/Ford';
import Hyundai from './componentes/Hyundai/Hyundai';
import VW from './componentes/VW/VW';
import Brasilia from './componentes/Brasilia/Brasilia';
import Mecanica from './componentes/Mecanica/Mecanica';


 function App() {
  return (
    <div>

      <Header/>

      <main>
        <Switch>
          <Route exact path = "/" render = {(props) => <Home/>}></Route>
          <Route exact path = "/chevrolet" render = {(props) => <Chevrolet/>}></Route>
          <Route exact path = "/fiat" render = {(props) => <Fiat/>}></Route>
          <Route exact path = "/ford" render = {(props) => <Ford/>}></Route>
          <Route exact path = "/hyundai" render = {(props) => <Hyundai/>}></Route>
          <Route exact path = "/vw" render = {(props) => <VW/>}></Route>
          <Route exact path = "/brasilia" render = {(props) => <Brasilia/>}></Route>
          <Route exact path = "/mecanica" render = {(props) => <Mecanica/>}></Route>
        </Switch>

      </main>

    </div>
  );
}

export default App;

