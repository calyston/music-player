//Music Player Controls

import React from 'react';
import play from '../assets/icons/play.svg';
// import pause from '../assets/icons/pause.svg';
import previous from '../assets/icons/previous.svg';
import next from '../assets/icons/next.svg';
// import library from '../assets/icons/library.svg';
// import repeat from '../assets/icons/repeat.svg';
// import shuffle from '../assets/icons/shuffle.svg';

const Player = () => {
  return (
    <div className="player">
      <div className="time-control">
        <p>Start Time</p>
        <input type="range" />
        <p>End Time</p>
      </div>
      <div className="play-control">
        <img className="buttons previous" src={previous} alt="previous" />
        <img className="buttons play" src={play} alt="play" />
        <img className="buttons next" src={next} alt="next" />
      </div>
    </div>
  )
}

export default Player;