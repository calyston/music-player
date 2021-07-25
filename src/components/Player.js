//Music Player Controls

import React, { useRef, useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//Font Awesome SVGs
// import { faPlay } from '@fortawesome/free-solid-svg-icons';
// import { faStepBackward } from '@fortawesome/free-solid-svg-icons';
// import { faStepForward } from '@fortawesome/free-solid-svg-icons';
// import { faRandom } from '@fortawesome/free-solid-svg-icons';

const Player = ({ currentSong, isPlaying, setIsPlaying }) => {
  //Reference
  const audioRef = useRef(null);
  //Event Handlers
  const playSongToggle = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const updateSongTime = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({ ...songInfo, currentTime: current, duration })
  };
  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
      //Time divided by 60 (shows minute), add :, add counter that goes back to 0  at 60 (shows seconds)
    )
  };

  const dragTimeSlider = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value })
  };

  //State
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });

  return (
    <div className="player-container">
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        <input min={0}
          max={songInfo.duration}
          value={songInfo.currentTime}
          onChange={dragTimeSlider}
          type="range" />
        <p>{getTime(songInfo.duration)}</p>
      </div>
      <div className="play-controls">
        {/* <FontAwesomeIcon className="shuffle" size="3x" icon={faRandom} />
        <FontAwesomeIcon className="previous" size="3x" icon={faStepBackward} />
        <FontAwesomeIcon className="play" size="3x" icon={faPlay} />
        <FontAwesomeIcon className="next" size="3x" icon={faStepForward} /> */}

        <svg className="buttons shuffle" xmlns="http://www.w3.org/2000/svg" width="3rem" height="3rem" viewBox="0 0 24 24"><path d="M2 7h-2v-2h2c3.49 0 5.48 1.221 6.822 2.854-.41.654-.754 1.312-1.055 1.939-1.087-1.643-2.633-2.793-5.767-2.793zm16 10c-3.084 0-4.604-1.147-5.679-2.786-.302.627-.647 1.284-1.06 1.937 1.327 1.629 3.291 2.849 6.739 2.849v3l6-4-6-4v3zm0-10v3l6-4-6-4v3c-5.834 0-7.436 3.482-8.85 6.556-1.343 2.921-2.504 5.444-7.15 5.444h-2v2h2c5.928 0 7.543-3.511 8.968-6.609 1.331-2.893 2.479-5.391 7.032-5.391z" /></svg>
        <svg className="buttons previous" xmlns="http://www.w3.org/2000/svg" width="3rem" height="3rem" viewBox="0 0 24 24"><path d="M4 2v20h-2v-20h2zm18 0l-16 10 16 10v-20z" /></svg>
        <svg onClick={playSongToggle} className="buttons play" xmlns="http://www.w3.org/2000/svg" width="3rem" height="3rem" viewBox="0 0 24 24">
          <path d={isPlaying ? "M10 24h-6v-24h6v24zm10-24h-6v24h6v-24z" : "M3 22v-20l18 10-18 10z"} /></svg>
        <svg className="buttons next" xmlns="http://www.w3.org/2000/svg" width="3rem" height="3rem" viewBox="0 0 24 24"><path d="M20 22v-20h2v20h-2zm-18 0l16-10-16-10v20z" /></svg>
        <svg className="buttons repeat" xmlns="http://www.w3.org/2000/svg" width="3rem" height="3rem" viewBox="0 0 24 24"><path d="M2 12c0 .999.381 1.902.989 2.604l-1.098.732-.587.392c-.814-1.025-1.304-2.318-1.304-3.728 0-3.313 2.687-6 6-6h9v-3l6 4-6 4v-3h-9c-2.206 0-4 1.794-4 4zm20.696-3.728l-.587.392-1.098.732c.608.702.989 1.605.989 2.604 0 2.206-1.795 4-4 4h-9v-3l-6 4 6 4v-3h9c3.313 0 6-2.687 6-6 0-1.41-.489-2.703-1.304-3.728z" /></svg>
      </div>
      <audio
        onTimeUpdate={updateSongTime}
        onLoadedMetadata={updateSongTime}
        ref={audioRef}
        src={currentSong.audio}></audio>
    </div>
  )
}

export default Player;