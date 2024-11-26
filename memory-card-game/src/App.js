import './App.css';
import React, { useEffect, useState } from 'react';

const narutoImgUrl = "https://static.wikia.nocookie.net/naruto/images/d/d6/Naruto_Part_I.png"
const sasukeImgUrl = "https://static.wikia.nocookie.net/naruto/images/2/21/Sasuke_Part_1.png"; 
const tsunadeImgUrl = "https://static.wikia.nocookie.net/naruto/images/b/b3/Tsunade_infobox2.png";

const imgArray = [narutoImgUrl, sasukeImgUrl, tsunadeImgUrl];

function App() {
  function startGame() {
    console.log('Starting game...');
  }
  startGame();

  function getCharacterCard() {

  }
  return (
    <>
      <div className="App">
        <header className="App-header">
        <img src={narutoImgUrl}/>
        <img src={sasukeImgUrl} />
        <img src={tsunadeImgUrl} />
        </header>
      </div>
    </>
  );
}

export default App;