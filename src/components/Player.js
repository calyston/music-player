//Music Player Controls

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//Font Awesome SVGs
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faStepBackward } from '@fortawesome/free-solid-svg-icons';
import { faStepForward } from '@fortawesome/free-solid-svg-icons';

const Player = () => {
  return (
    <div className="player">
      <div className="time-control">
        <p>Start Time</p>
        <input type="range" />
        <p>End Time</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon className="previous" size="3x" icon={faStepBackward} />
        <FontAwesomeIcon className="play" size="3x" icon={faPlay} />
        <FontAwesomeIcon className="next" size="3x" icon={faStepForward} />
      </div>
    </div>
  )
}

export default Player;