import React from 'react';
import Game from './components/Game';
import './App.css';
import { Col, Row, Container } from "./components/Grid";
import Jumbotron from "./components/Jumbotron";
import Instructions from "./components/Instructions";


function App() {

  return (
    <div className="App">
      <Jumbotron />
      <Instructions />
      <Game />

    </div>
  );
}

export default App;
