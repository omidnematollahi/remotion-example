import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import {Thumbnail} from '@remotion/player';
import CarSlideshow from './remotion/CarSlideshow';
import {FontPicker} from './remotion/FontPicker';
// import {ThumbnailDemo} from './remotion/ThumbnailDemo';
// import {VideoAutoplayDemo} from './remotion/VideoAutoplayDemo';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <FontPicker />
			<h2>Player</h2>
			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'center',
				}}
			>
				<App component={CarSlideshow} durationInFrames={500} />
			</div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
