import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Nenhum vídeo encontrado</div>;
  } else {
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
      <div>
        <div className="embed-responsive embed-responsive-16by9">
          <iframe title="video-player" src={videoSrc} />
        </div>
        <div className="py-3">
          <h4 className="title">{video.snippet.title}</h4>
          <p>{video.snippet.description}</p>
        </div>
      </div>
    );
  }
};

export default VideoDetail;
