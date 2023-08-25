import React from "react";
import Plyr from "plyr-react";
import "plyr/dist/plyr.css";

import Loadable from "react-loadable";

interface VideoPlayerProps {
  videoUrl: string;
}

const LoadableVideoPlayer = Loadable({
  loader: () => import(/* webpackChunkName: "plyr" */ "plyr-react"),
  loading: () => <div>Loading...</div>,
});

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl }) => {
  return (
    <div>
      <style>
        {`
          .plyr--video {
            --plyr-color-main: red;
          }
        `}
      </style>
      <LoadableVideoPlayer
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
