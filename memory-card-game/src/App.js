import './App.css';
import myAudio from './src/pain-theme-song';

function App() {
  function startGame() {
    console.log('Starting game...');
  }
  startGame();
  
  const AudioPlayer = () => {
    const audioRef = React.useRef(null);

    const playAudio = () => {
      audioRef.current.play();
    };
  
    const pauseAudio = () => {
      audioRef.current.pause();
    };
  }
  return (
    <>
      <div className="App">
        <header className="App-header">
          {/* dding h1 added a silly black margin at the top of the page */}
          <h1>Memory Card Game</h1>
        </header>
        <div class="card-container">
        <audio ref={audioRef} src={myAudio} />
      <button onClick={playAudio}>Play</button>
      <button onClick={pauseAudio}>Pause</button>
        </div>
        
      </div>
    </>
  );
}

export default App;