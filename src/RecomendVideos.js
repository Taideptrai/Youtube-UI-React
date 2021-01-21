import React, { Component } from 'react';
import './RecomendVideos.css';
import YouTube from '@u-wave/react-youtube';

function RecomendVideos({videoPlay}){
  console.log('videoPlay at recomnd', videoPlay)
  const videoNow = videoPlay[1]
  console.log('videoNow', videoNow)
  return(
    <div className="RecomendVideos">
      { (videoNow) &&
        <div>
        <YouTube
         className="videoChildInList__video"
         video={videoNow.id.videoId}
         width='100%'
         height='400px'
      />
      <p className="videoChildInRecomend__title">{videoNow.snippet.title}</p>
      </div>
      }
    </div>
  )
}
export default RecomendVideos;
