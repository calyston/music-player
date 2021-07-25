//Library Song Name Artist and Image

import React from 'react';

const LibrarySong = ({ song }) => {
  return (
    <div className="librarysong-container">
      <img src={song.cover} alt={song.name}></img>
      <h3>{song.name}</h3>
      <p>{song.artist}</p>
    </div>
  )
}

export default LibrarySong;