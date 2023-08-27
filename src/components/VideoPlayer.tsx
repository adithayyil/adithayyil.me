import React, { useState } from "react";

interface VideoPlayerProps {
  videoUrl: string;
}

const PlayButtonIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-player-play"
    width="40"
    height="40"
    viewBox="0 0 24 24"
    strokeWidth="2"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M7 4v16l13 -8z"></path>
  </svg>
);

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl }) => {
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    setPlaying(true);
  };

  return (
    <div>
      <div className="relative w-full pb-[56.25%] overflow-hidden">
        {playing ? (
          <video
            controls
            autoPlay
            className="absolute top-0 left-0 w-full h-full"
          >
            <source src={videoUrl} type="video/mp4" />
          </video>
        ) : (
          <div
            onClick={handlePlay}
            className="absolute top-0 left-0 w-full h-full bg-black flex justify-center items-center cursor-pointer border border-white"
          >
            <button
              onClick={handlePlay}
              className="text-white text-2xl bg-transparent border-none outline-none"
            >
              <PlayButtonIcon />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoPlayer;
