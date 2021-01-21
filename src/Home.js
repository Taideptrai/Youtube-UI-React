import React, { Component } from 'react';
import YouTube from '@u-wave/react-youtube';
import { useState, useEffect } from 'react';
import axios from "axios";
import './Home.css';
const API_KEY = "AIzaSyBZLgEMThCeTygrVrJ8lEZVVYJ7ym-Eb7A";

function Home(){
    console.log('Home render')
    const [HomeVideo, setHomeVideo] = React.useState([]);
    useEffect(()=>{ 
        const source = axios.CancelToken.source()
        axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet&maxResults=15&chart=mostPopular&regionCode=IN&key=${API_KEY}`)
        .then(res => {
            setHomeVideo(res.data.items)
      });
      return () => {
        source.cancel()
      }
       },[])
    return(
    <div className="HomeVideos">
        {
              HomeVideo.map((item,key)=>
                <div key={key} className="videoChildInHomeVideos">
                <YouTube
                   className="videoChildInHomeVideos__video"
                   video={item.id}
                   width='100%'
                   height='200px'
               />
               <p className="videoChildInHomeVideos__title">{item.snippet.title}</p>
                </div>
            ) 
        }
    </div>
  )
}
export default Home;
