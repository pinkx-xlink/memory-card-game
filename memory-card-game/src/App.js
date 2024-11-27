import './App.css';
import myAudio from './audio/pain-theme-song.mp3'
import React from 'react';

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
        
        </div>
        
      </div>
    </>
  );
}


const AudioPlayer = () => {
  const audioRef = React.useRef(null);

  const playAudio = () => {
    audioRef.current.play();
  };

  const pauseAudio = () => {
    audioRef.current.pause();
  };
  return (
    <>
      <audio ref={audioRef} src={myAudio} />
      <button onClick={playAudio}>Play</button>
      <button onClick={pauseAudio}>Pause</button>
    </>
  )
}

export default App;