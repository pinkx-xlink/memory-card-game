import React from "react";
import myAudio from './audio/pain-theme-song.mp3'

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
        <button onClick={playAudio}>♪</button>
        <button onClick={pauseAudio}>Pause</button>
        </>
    )
    }

export default AudioPlayer;