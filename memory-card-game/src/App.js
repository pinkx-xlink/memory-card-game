import './App.css';
import React, { useEffect, useState } from 'react';

const narutoImgUrl = "https://static.wikia.nocookie.net/naruto/images/d/d6/Naruto_Part_I.png"
const sasukeImgUrl = "https://static.wikia.nocookie.net/naruto/images/2/21/Sasuke_Part_1.png"; 
const tsunadeImgUrl = "https://static.wikia.nocookie.net/naruto/images/b/b3/Tsunade_infobox2.png";
const shikamaruImgUrl = "https://static.wikia.nocookie.net/naruto/images/4/44/Shikamaru_Part_I.png";
const zabuzaImgUrl = "https://static.wikia.nocookie.net/naruto/images/3/37/Zabuza_Momochi.png";
const asumaImgUrl = "https://static.wikia.nocookie.net/naruto/images/7/7c/Asuma.png";
const gamatatsuImgUrl = "https://static.wikia.nocookie.net/naruto/images/8/81/Gamatatsu.png";
const kankuroImgUrl = "https://static.wikia.nocookie.net/naruto/images/7/7d/Kankur%C5%8D1.png";
const hinataImgUrl = "https://static.wikia.nocookie.net/naruto/images/9/97/Hinata.png";
const chojiImgUrl = "https://static.wikia.nocookie.net/naruto/images/7/7d/Ch%C5%8Dji_Akimichi.png";
const kakashiImgUrl = "https://static.wikia.nocookie.net/naruto/images/2/27/Kakashi_Hatake.png";
const gaaraImgUrl = "https://static.wikia.nocookie.net/naruto/images/2/20/Gaara_in_Part_I.png";

const imgArray = [narutoImgUrl, sasukeImgUrl, tsunadeImgUrl, shikamaruImgUrl, zabuzaImgUrl, asumaImgUrl, gamatatsuImgUrl, kankuroImgUrl, hinataImgUrl, chojiImgUrl, kakashiImgUrl, gaaraImgUrl];

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
          {/* dding h1 added a silly black margin at the top of the page */}
          <h1>Memory Card Game</h1>
        </header>
        <div class="card-container">
          <img src={narutoImgUrl}/>
          <img src={sasukeImgUrl} />
          <img src={tsunadeImgUrl} />
        </div>
      </div>
    </>
  );
}

export default App;