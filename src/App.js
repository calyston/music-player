import React, { useState } from 'react';
import './sass/main.scss';
import music from './Music';

//Adding Components
import Song from './components/Song';
import Player from './components/Player';
import Library from './components/Library';

function App() {
  const [songs, setSongs] = useState(music());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player setIsPlaying={setIsPlaying}
        isPlaying={isPlaying}
        currentSong={currentSong} />
      <Library songs={songs} />
    </div>
  );
}

export default App;
