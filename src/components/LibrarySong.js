//Library Song Name Artist and Image

import React from 'react';

const LibrarySong = ({ song, songs, setCurrentSong, id }) => {
  const selectSong = () => {
    const selectedSong = songs.filter((state) => state.id === id);
    setCurrentSong(selectedSong[0]);
  }
  return (
    <div onClick={selectSong} className="library-song">
      <img src={song.cover} alt={song.name}></img>
      <div className="library-song-text">
        <h4>{song.name}</h4>
        <p>{song.artist}</p>
      </div>

    </div>
  )
}

export default LibrarySong;