import React from "react";
import Plyr from "plyr-react";

interface VideoPlayer {
  videoUrl: string;
}

const VideoPlayer: React.FC<VideoPlayer> = ({ videoUrl }) => {
  return (
    <div>
      <style>
        {`
          .plyr--video {
            --plyr-color-main: red;
          }
        `}
      </style>
      <Plyr
        source={{
          type: "video",
          sources: [
            {
              src: videoUrl,
              type: "video/mp4",
            },
          ],
        }}
        options={{
          controls: [
            "play",
            "progress",
            "current-time",
            "mute",
            "volume",
            "pip",
            "airplay",
            "fullscreen",
            "quality",
          ],
          autoplay: false,
          loop: { active: false },
        }}
      />
    </div>
  );
};

export default VideoPlayer;
