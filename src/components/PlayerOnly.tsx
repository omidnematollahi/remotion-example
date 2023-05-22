import {
	ErrorFallback,
	Player,
	PlayerRef,
	RenderLoading,
	RenderPoster,
} from '@remotion/player';

import React, {
    ComponentType,
    ReactNode,
	useCallback,
} from 'react';
import {AbsoluteFill} from 'remotion';
import {Loading} from '../remotion/Loading';

type AnyComponent<T> = ComponentType<T> | ((props: T) => ReactNode);


type CompProps<T> =
| {
    lazyComponent: () => Promise<{default: AnyComponent<T>}>;
}
| {
    component: AnyComponent<T>;
};

const fps = 30;

export const PlayerOnly: React.FC<
	{
		playerRef: React.RefObject<PlayerRef>;
		inputProps: object;
		clickToPlay: boolean;
		loop: boolean;
		durationInFrames: number;
		doubleClickToFullscreen: boolean;
		playbackRate: number;
		spaceKeyToPlayOrPause: boolean;
		moveToBeginningWhenEnded: boolean;
		showPosterWhenPaused: boolean;
		showPosterWhenEnded: boolean;
		showPosterWhenUnplayed: boolean;
		inFrame: number | null;
		outFrame: number | null;
		alwaysShowControls: boolean;
		showVolumeControls: boolean;
	} & CompProps<any>
> = ({
	playerRef,
	inputProps,
	clickToPlay,
	loop,
	durationInFrames,
	doubleClickToFullscreen,
	playbackRate,
	spaceKeyToPlayOrPause,
	moveToBeginningWhenEnded,
	showPosterWhenPaused,
	showPosterWhenEnded,
	showPosterWhenUnplayed,
	inFrame,
	outFrame,
	alwaysShowControls,
	showVolumeControls,
	...props
}) => {
	const renderLoading: RenderLoading = useCallback(() => {
		return (
			<AbsoluteFill style={{backgroundColor: 'yellow'}}>
				<Loading size={200} />
				<div>Loading for 3 seconds...</div>
			</AbsoluteFill>
		);
	}, []);
	const renderPoster: RenderPoster = useCallback(() => {
		return (
			<AbsoluteFill style={{backgroundColor: 'yellow'}}>
				<div>Click to play</div>
			</AbsoluteFill>
		);
	}, []);

	const errorFallback: ErrorFallback = useCallback(({error}) => {
		return (
			<AbsoluteFill
				style={{
					backgroundColor: 'yellow',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				Sorry about this! An error occurred: {error.message}
			</AbsoluteFill>
		);
	}, []);

	return (
		<Player
			ref={playerRef}
			controls
			showVolumeControls={showVolumeControls}
			compositionWidth={500}
			compositionHeight={432}
			fps={fps}
			{...props}
			durationInFrames={durationInFrames}
			doubleClickToFullscreen={doubleClickToFullscreen}
			loop={loop}
			clickToPlay={clickToPlay}
			inputProps={inputProps}
			renderLoading={renderLoading}
			errorFallback={errorFallback}
			playbackRate={playbackRate}
			spaceKeyToPlayOrPause={spaceKeyToPlayOrPause}
			moveToBeginningWhenEnded={moveToBeginningWhenEnded}
			renderPoster={renderPoster}
			initialFrame={30}
			showPosterWhenUnplayed={showPosterWhenUnplayed}
			showPosterWhenEnded={showPosterWhenEnded}
			showPosterWhenPaused={showPosterWhenPaused}
			inFrame={inFrame}
			outFrame={outFrame}
			alwaysShowControls={alwaysShowControls}
			style={{
				height: '100%',
				width: '100%',
				resize: 'both',
				maxWidth: 550,
				maxHeight: 550,
				minWidth: 500,
				minHeight: 500,
				display: 'block',
			}}
		/>
	);
};

export default PlayerOnly;