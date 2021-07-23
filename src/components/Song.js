//Song Name Artist and Image

import React from 'react';

const Song = ({ currentSong }) => {
  return (
    <div className="song-container">
      <img src={currentSong.cover} alt=""></img>
      <h2>{currentSong.name}</h2>
      <p>{currentSong.artist}</p>
    </div>
  )
}

export default Song;