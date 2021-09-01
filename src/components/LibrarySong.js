//Library Song Name Artist and Image

import React from 'react';

const LibrarySong = ({ song, songs, setCurrentSong, id, audioRef, isPlaying }) => {
  const selectSong = () => {
    const selectedSong = songs.filter((state) => state.id === id);
    setCurrentSong(selectedSong[0]);
    audioRef.current.play();
    //Check if the song is playing
    if (isPlaying) {
      const currentlyPlaying = audioRef.current.play();
      if (currentlyPlaying !== undefined) {
        currentlyPlaying.then((audio) => {
          audioRef.current.play();
        });
      }
    }
  };
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