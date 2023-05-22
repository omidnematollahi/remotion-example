import {
	PlayerRef,
} from '@remotion/player';
import React, {
	ComponentType,
	ReactNode,
	useMemo,
	useRef,
	useState,
} from 'react';


import { ControlsOnly } from "./components/ControlsOnly";
import { PlayerOnly } from "./components/PlayerOnly";

type AnyComponent<T> = ComponentType<T> | ((props: T) => ReactNode);

type CompProps<T> =
	| {
			lazyComponent: () => Promise<{default: AnyComponent<T>}>;
	  }
	| {
			component: AnyComponent<T>;
	  };

const App = ({
	durationInFrames,
	...props
}: {
	durationInFrames: number;
} & CompProps<any>) => {
	const [title, setTitle] = useState('Hello World');
	const [color, setColor] = useState('#ffffff');
	const [bgColor, setBgColor] = useState('#000000');
	const [loop, setLoop] = useState(false);
	const [doubleClickToFullscreen, setDoubleClickToFullscreen] = useState(true);
	const [clickToPlay, setClickToPlay] = useState(true);
	const [spaceKeyToPlayOrPause, setSpaceKeyToPlayOrPause] = useState(true);
	const [moveToBeginningWhenEnded, setMoveToBeginningWhenEnded] =
		useState(true);
	const [playbackRate, setPlaybackRate] = useState(1);
	const [showPosterWhenUnplayed, setshowPosterWhenUnplayed] = useState(true);
	const [showPosterWhenEnded, setShowPosterWhenEnded] = useState(true);
	const [showPosterWhenPaused, setShowPosterWhenPaused] = useState(true);
	const [inFrame, setInFrame] = useState<number | null>(null);
	const [outFrame, setOutFrame] = useState<number | null>(null);
	const [alwaysShowControls, setAlwaysShowControls] = useState(false);
	const [showVolumeControls, setShowVolumeControls] = useState(true);

	const ref = useRef<PlayerRef>(null);

	const inputProps = useMemo(() => {
		return {
			title: String(title),
			bgColor: String(bgColor),
			color: String(color),
		};
	}, [bgColor, color, title]);

	return (
		<div style={{margin: '2rem'}}>
			<PlayerOnly
				alwaysShowControls={alwaysShowControls}
				clickToPlay={clickToPlay}
				{...props}
				doubleClickToFullscreen={doubleClickToFullscreen}
				durationInFrames={durationInFrames}
				inputProps={inputProps}
				loop={loop}
				moveToBeginningWhenEnded={moveToBeginningWhenEnded}
				playbackRate={playbackRate}
				spaceKeyToPlayOrPause={spaceKeyToPlayOrPause}
				playerRef={ref}
				showPosterWhenEnded={showPosterWhenEnded}
				showPosterWhenPaused={showPosterWhenPaused}
				showPosterWhenUnplayed={showPosterWhenUnplayed}
				showVolumeControls={showVolumeControls}
				inFrame={inFrame}
				outFrame={outFrame}
			/>
			<ControlsOnly
				bgColor={bgColor}
				clickToPlay={clickToPlay}
				color={color}
				doubleClickToFullscreen={doubleClickToFullscreen}
				loop={loop}
				moveToBeginningWhenEnded={moveToBeginningWhenEnded}
				setBgColor={setBgColor}
				setClickToPlay={setClickToPlay}
				setColor={setColor}
				setDoubleClickToFullscreen={setDoubleClickToFullscreen}
				setLoop={setLoop}
				setMoveToBeginningWhenEnded={setMoveToBeginningWhenEnded}
				setPlaybackRate={setPlaybackRate}
				setSpaceKeyToPlayOrPause={setSpaceKeyToPlayOrPause}
				setTitle={setTitle}
				spaceKeyToPlayOrPause={spaceKeyToPlayOrPause}
				title={title}
				playerRef={ref}
				setshowPosterWhenUnplayed={setshowPosterWhenUnplayed}
				setShowPosterWhenEnded={setShowPosterWhenEnded}
				setShowPosterWhenPaused={setShowPosterWhenPaused}
				setAlwaysShowControls={setAlwaysShowControls}
				showPosterWhenUnplayed={showPosterWhenUnplayed}
				showPosterWhenEnded={showPosterWhenEnded}
				showPosterWhenPaused={showPosterWhenPaused}
				alwaysShowControls={alwaysShowControls}
				setShowVolumeControls={setShowVolumeControls}
				showVolumeControls={showVolumeControls}
				setInFrame={setInFrame}
				setOutFrame={setOutFrame}
				inFrame={inFrame}
				outFrame={outFrame}
				durationInFrames={durationInFrames}
			/>
		</div>
	);
};

export default App;
