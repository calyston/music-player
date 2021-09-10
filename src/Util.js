export const playAudio = (isPlaying, audioRef) => {
  if (isPlaying) {
    const currentlyPlaying = audioRef.current.play();
    if (currentlyPlaying !== undefined) {
      currentlyPlaying.then((audio) => {
        audioRef.current.play();
      });
    }
  }
};