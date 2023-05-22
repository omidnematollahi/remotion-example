import {
	PlayerRef,
} from '@remotion/player';

import React, {
	useEffect,
} from 'react';
import {TimeDisplay} from '../remotion/TimeDisplay';

export const ControlsOnly: React.FC<{
	playerRef: React.RefObject<PlayerRef>;
	color: string;
	setColor: React.Dispatch<React.SetStateAction<string>>;
	title: string;
	setTitle: React.Dispatch<React.SetStateAction<string>>;
	bgColor: string;
	setBgColor: React.Dispatch<React.SetStateAction<string>>;
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
}> = ({
	playerRef: ref,
	color,
	title,
	setTitle,
	setColor,
	bgColor,
	setBgColor,
}) => {
	
	useEffect(() => {
		const {current} = ref;
		if (!current) {
			return;
        }
	}, [ref]);

	return (
		<div>
			<div style={{paddingTop: '0.5rem'}}>
				Enter Text{' '}
				<input
					value={title}
					onChange={(e) => {
						setTitle(e.target.value);
					}}
				/>
			</div>
			<div>
				<TimeDisplay playerRef={ref} />
			</div>
			<div style={{paddingTop: '0.5rem'}}>
				<div>
					Select Text Color{' '}
					<input
						type="color"
						value={color}
						onChange={(e) => setColor(e.target.value)}
					/>
				</div>
				<div>
					Select Background Color{' '}
					<input
						type="color"
						value={bgColor}
						onChange={(e) => setBgColor(e.target.value)}
					/>
				</div>
			</div>
		</div>
	);
};

export default ControlsOnly;