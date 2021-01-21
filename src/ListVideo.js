import React, { Component } from 'react';
import './ListVideo.css';
import YouTube from '@u-wave/react-youtube';
import moment from 'moment';

function ListVideo({videoList}){
  console.log('videoList',videoList)
  return(
    <div className="ListVideo">
      <h2>Recommend Video</h2>
      <hr />
      {
         videoList.map((item,key)=>
         { 
            const dataTimeApi = item.snippet.publishedAt;
            console.log('dataTimeAPI', dataTimeApi);
            const stringIndex = dataTimeApi.indexOf("T");
            const dataTimeAPIconvert   = dataTimeApi.slice(0, stringIndex).replace(/\-/g,"");
            const dataMoment = moment(dataTimeAPIconvert, "YYYYMMDD").fromNow();
            return( 
             <div key={key} className="videoChildInList">
             <YouTube
                className="videoChildInList__video"
                video={item.id.videoId}
                width='200px'
                height='100px'
            />
            <div className="InforVideoList">
            <p className="videoChildInList__title">{item.snippet.description}</p>
            <p className="videoChildInList__time">{dataMoment}</p>
            </div>
             </div>)
         }
         ) 
      }
      <a href="#">See More</a>  
           
    </div>
  )
}
export default ListVideo;
