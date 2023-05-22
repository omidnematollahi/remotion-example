import { preloadAudio, preloadVideo } from '@remotion/preload';
// import { Gif } from '@remotion/gif';
import { AbsoluteFill, Series, staticFile, Video } from 'remotion';

preloadVideo(
	'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4'
);

preloadAudio(staticFile('sample.mp3'));

export const VideoAutoplayDemo = () => {
	return (
		<AbsoluteFill>
			<Series>
				<Series.Sequence durationInFrames={10}>
					<Video src='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4'></Video>
					{/* <AbsoluteFill /> */}
				</Series.Sequence>
			</Series>
			<AbsoluteFill>
				<Video  src='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4'></Video>
				{/* <Gif
					src="https://media.giphy.com/media/xT0GqH01ZyKwd3aT3G/giphy.gif"
					fit="cover"
					height={315}
					width={500}
				/> */}
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
