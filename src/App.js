import React, { useState, useRef } from 'react';
import './sass/main.scss';
import music from './Music';

//Adding Components
import Song from './components/Song';
import Player from './components/Player';
import Library from './components/Library';

function App() {
  //Reference
  const audioRef = useRef(null);
  //State
  const [songs, setSongs] = useState(music());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });

  const updateSongTime = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({ ...songInfo, currentTime: current, duration })
  };

  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player
        audioRef={audioRef}
        setIsPlaying={setIsPlaying}
        isPlaying={isPlaying}
        currentSong={currentSong}
        setSongInfo={setSongInfo}
        songInfo={songInfo} />
      <Library audioRef={audioRef} songs={songs} setCurrentSong={setCurrentSong} />
      <audio
        onTimeUpdate={updateSongTime}
        onLoadedMetadata={updateSongTime}
        ref={audioRef}
        src={currentSong.audio}>
      </audio>
    </div>
  );
}

export default App;
