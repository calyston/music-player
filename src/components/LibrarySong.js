//Library Song Name Artist and Image

import React from 'react';

const LibrarySong = ({ song }) => {
  return (
    <div className="library-song">
      <img src={song.cover} alt={song.name}></img>
      <div className="library-song-text">
        <h4>{song.name}</h4>
        <p>{song.artist}</p>
      </div>

    </div>
  )
}

export default LibrarySong;