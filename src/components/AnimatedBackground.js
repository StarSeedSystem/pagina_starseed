import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const move = keyframes`
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(var(--moveX), var(--moveY)) scale(var(--scale)); }
`;

const BackgroundWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
`;

const ColorBlob = styled.div`
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.5;
  animation: ${move} var(--duration) infinite ease-in-out;
`;

const colors = ['#ff0000', '#ffb000', '#ffff00', '#00ff00', '#00ffff', '#0000ff', '#7000ff'];

const AnimatedBackground = () => {
  const [blobs, setBlobs] = useState([]);

  useEffect(() => {
    const newBlobs = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      color: colors[Math.floor(Math.random() * colors.length)],
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 30 + 10}%`,
      moveX: `${(Math.random() - 0.5) * 40}px`,
      moveY: `${(Math.random() - 0.5) * 40}px`,
      scale: Math.random() * 0.5 + 0.75,
      duration: `${Math.random() * 10 + 5}s`,
    }));
    setBlobs(newBlobs);
  }, []);

  return (
    <BackgroundWrapper>
      {blobs.map((blob) => (
        <ColorBlob
          key={blob.id}
          style={{
            top: blob.top,
            left: blob.left,
            width: blob.size,
            height: blob.size,
            background: blob.color,
            '--moveX': blob.moveX,
            '--moveY': blob.moveY,
            '--scale': blob.scale,
            '--duration': blob.duration,
          }}
        />
      ))}
    </BackgroundWrapper>
  );
};

export default AnimatedBackground;