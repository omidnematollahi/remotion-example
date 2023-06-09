import { createRef, useCallback, useImperativeHandle, useState } from 'react';
import { Img, interpolate, useCurrentFrame, useVideoConfig, staticFile } from 'remotion';

type Props = {
  title: string;
  bgColor: string;
  color: string;
};

export const playerExampleComp = createRef<{
  triggerError: () => void;
}>();

const TextSlide = ({ title, bgColor, color }: Props) => {
  const frame = useCurrentFrame();
  const { width, height, durationInFrames } = useVideoConfig();
  const left = interpolate(frame, [0, durationInFrames], [width, width * -1]);

  const [shouldThrowError, setThrowError] = useState(false);

  const dummyText = useCallback(() => {
    if (shouldThrowError) {
      throw new Error('some error');
    }
    return '';
  }, [shouldThrowError]);

  useImperativeHandle(
    playerExampleComp,
    () => {
      return {
        triggerError: () => {
          setThrowError(true);
        },
      };
    },
    [],
  );

  return (
    <div
      style={{
        backgroundColor: bgColor,
        width,
        height,
        position: 'absolute',
        left: 0,
        top: 0,
      }}
    >
      <h1
        style={{
          fontSize: '5em',
          fontWeight: 'bold',
          position: 'absolute',
          top: height / 2 - 100,
          left,
          color,
          whiteSpace: 'nowrap',
        }}
      >
        {title} {dummyText()}
      </h1>
      <Img
        src={staticFile('/logo.png')}
        style={{
          height: 40,
          width: 40,
        }}
      />
    </div>
  );
};

export default TextSlide;
