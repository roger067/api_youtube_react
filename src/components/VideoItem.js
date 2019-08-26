import React from "react";
import "./VideoItem.scss";
import { truncate } from "../utils";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div onClick={() => onVideoSelect(video)} className="video-item item">
      <img
        className="img-fluid"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <div className="content">
        <div className="header">{truncate(video.snippet.title)}</div>
        <span>{video.snippet.channelTitle}</span>
      </div>
    </div>
  );
};

export default VideoItem;
