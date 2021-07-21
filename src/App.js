import React, { useState } from 'react';
import './sass/main.scss';
import music from './Music';

//Adding Components
import Song from './components/Song';
import Player from './components/Player';

function App() {
  const [songs, setSongs] = useState(music());
  const [currentSong, setCurrentSong] = useState(songs[0]);

  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player />
    </div>
  );
}

export default App;
