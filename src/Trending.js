import React, { Component } from 'react';
import YouTube from '@u-wave/react-youtube';
import { useState, useEffect } from 'react';
import axios from "axios";
import './Trending.css';
const API_KEY = "AIzaSyBZLgEMThCeTygrVrJ8lEZVVYJ7ym-Eb7A";
function Trending(){
   console.log('Trending render')
   const [TrendingVideo, setTrendingVideo] = React.useState([]);
  useEffect(()=>{
      console.log('trending set effect') 
      const source = axios.CancelToken.source()
      axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet&maxResults=15&chart=mostPopular&regionCode=NZ&key=${API_KEY}`)
      .then(res => {
        setTrendingVideo(res.data.items)
    });
    return () =>{
      console.log('trending clean effect')
      source.cancel()
    }
     },[])
    return(
    <div className="trendingVideos">
        {
              TrendingVideo.map((item,key)=>
                <div key={key} className="videoChildInTrendingVideos">
                <YouTube
                   className="videoChildInTrendingVideos__video"
                   video={item.id}
                   width='100%'
                   height='200px'
               />
               <p className="videoChildInTrendingVideos__title">{item.snippet.title}</p>
                </div>
            ) 
        }
    </div>
  )
}
export default Trending;
