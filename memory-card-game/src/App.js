import './App.css';
// import React, { useEffect, useState } from 'react';


function App() {
  function startGame() {
    console.log('Starting game...');
  }
  startGame();
  
  return (
    <>
      <div className="App">
        <header className="App-header">
          {/* dding h1 added a silly black margin at the top of the page */}
          <h1>Memory Card Game</h1>
          
        </header>
        <div class="card-container">


          {/* <img src={narutoImgUrl}/>
          <img src={sasukeImgUrl} />
          <img src={tsunadeImgUrl} /> */}
        </div>
        
      </div>
    </>
  );
}

export default App;