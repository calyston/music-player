//Library Song Name Artist and Image

import React from 'react';

const LibrarySong = ({ song, songs, setCurrentSong, id, audioRef, isPlaying, setSongs }) => {
  const selectSong = () => {
    const selectedSong = songs.filter((state) => state.id === id);
    setCurrentSong(selectedSong[0]);
    audioRef.current.play();
    //Add Active State
    const newSongs = songs.map((song) => {
      if (song.id === id) {
        return {
          ...song,
          active: true,
        }
      } else {
        return {
          ...song,
          active: false,
        }
      }
    });
    setSongs(newSongs);
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
    <div onClick={selectSong} className={`library-song ${song.active ? 'selected' : ''}`}>
      <img src={song.cover} alt={song.name}></img>
      <div className="library-song-text">
        <h4>{song.name}</h4>
        <p>{song.artist}</p>
      </div>

    </div>
  )
}

export default LibrarySong;