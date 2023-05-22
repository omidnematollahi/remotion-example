import { PlayerRef } from '@remotion/player';

import React, { useEffect } from 'react';
import { TimeDisplay } from '../remotion/TimeDisplay';

import './ControlsOnly.scss';

export const ControlsOnly: React.FC<{
  playerRef: React.RefObject<PlayerRef>;
  color: string;
  setColor: React.Dispatch<React.SetStateAction<string>>;
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  bgColor: string;
  setBgColor: React.Dispatch<React.SetStateAction<string>>;
  setPause: React.Dispatch<React.SetStateAction<boolean>>;
  setPlaybackRate: React.Dispatch<React.SetStateAction<number>>;
  loop: boolean;
  setLoop: React.Dispatch<React.SetStateAction<boolean>>;
  clickToPlay: boolean;
  setClickToPlay: React.Dispatch<React.SetStateAction<boolean>>;
  doubleClickToFullscreen: boolean;
  setDoubleClickToFullscreen: React.Dispatch<React.SetStateAction<boolean>>;
  spaceKeyToPlayOrPause: boolean;
  setSpaceKeyToPlayOrPause: React.Dispatch<React.SetStateAction<boolean>>;
  moveToBeginningWhenEnded: boolean;
  setMoveToBeginningWhenEnded: React.Dispatch<React.SetStateAction<boolean>>;
  showPosterWhenUnplayed: boolean;
  setshowPosterWhenUnplayed: React.Dispatch<React.SetStateAction<boolean>>;
  showPosterWhenEnded: boolean;
  setShowPosterWhenEnded: React.Dispatch<React.SetStateAction<boolean>>;
  showPosterWhenPaused: boolean;
  setShowPosterWhenPaused: React.Dispatch<React.SetStateAction<boolean>>;
  inFrame: number | null;
  setInFrame: React.Dispatch<React.SetStateAction<number | null>>;
  outFrame: number | null;
  setOutFrame: React.Dispatch<React.SetStateAction<number | null>>;
  alwaysShowControls: boolean;
  setAlwaysShowControls: React.Dispatch<React.SetStateAction<boolean>>;
  showVolumeControls: boolean;
  setShowVolumeControls: React.Dispatch<React.SetStateAction<boolean>>;
  durationInFrames: number;
}> = ({ playerRef: ref, color, title, setTitle, setColor, bgColor, setBgColor, setPause }) => {
  useEffect(() => {
    const { current } = ref;
    if (!current) {
      return;
    }
  }, [ref]);

  const onTextChange = (e: any) => {
    setTitle(e.target.value);
    setPause(true);
  };

  const onColorChange = (e: any) => {
    setColor(e.target.value);
    setPause(true);
  };

  const onBackgroundColorChange = (e: any) => {
    setBgColor(e.target.value);
    setPause(true);
  };

  return (
    <div className="control">
      <div className="control__field">
        <label>Enter Text</label> <input value={title} onChange={onTextChange} />
      </div>
      <div className="control__video-time">
        <TimeDisplay playerRef={ref} />
      </div>
      <div className="control__field">
        <label>Select Text Color</label> <input type="color" value={color} onChange={onColorChange} />
      </div>
      <div className="control__field">
        <label>Select Background Color</label>{' '}
        <input type="color" value={bgColor} onChange={onBackgroundColorChange} />
      </div>
    </div>
  );
};

export default ControlsOnly;
