import React from 'react';
import {VideoAutoplayDemo} from './VideoAutoplayDemo';
import {Thumbnail} from '@remotion/player';

export const ThumbnailDemo: React.FC = () => {
	return (
		<div style={{margin: '2rem'}}>
			<Thumbnail
				inputProps={{}}
				component={VideoAutoplayDemo}
				compositionWidth={500}
				compositionHeight={432}
				frameToDisplay={40}
				durationInFrames={2700}
				fps={30}
				style={{
					width: 100,
					height: 100,
				}}
			/>
		</div>
	);
};
