import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import backgroundImage from './img/pain-background.png';

const imgUrl = "https://static.wikia.nocookie.net/naruto/images/d/d6/Naruto_Part_I.png"

function App() {
  function startGame() {
    prompt('Start game?');
  }
  startGame();

  function getCharacterCard() {

  }
  return (
    <>
      <div style={{ backgroundImage: `url(${backgroundImage})` }} />
      <div className="App">
        <header className="App-header">
        <img src={imgUrl}/>
        </header>
      </div>
    </>
  );
}

export default App;