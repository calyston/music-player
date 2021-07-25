//Library Song Name Artist and Image

import React from 'react';

const LibrarySong = ({ currentSong }) => {
  return (
    <div className="librarysong-container">
      <img src={currentSong.cover} alt=""></img>
      <h3>{currentSong.name}</h3>
      <p>{currentSong.artist}</p>
    </div>
  )
}

export default LibrarySong;