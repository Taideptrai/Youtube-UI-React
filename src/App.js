import React from "react";
import ReactDOM from "react-dom";
import { useState, useEffect } from 'react';
import axios from "axios";
import './App.css';
import Header from "./Header";
import Sidebar from "./Sidebar";
import RecomendVideos from "./RecomendVideos";
import ListVideo from "./ListVideo";
import Trending from "./Trending";
import Home from "./Home";
import {useHistory} from 'react-router-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";




const API_KEY = "AIzaSyBZLgEMThCeTygrVrJ8lEZVVYJ7ym-Eb7A";
const App = () =>{
  console.log("App render")
  const history=useHistory()
  const [search,setSearch] = React.useState("");
  const [videos, setVideos] = React.useState([]);
  const [selectedVideo, setSelectedVideo] = React.useState(null);
  const setSearchState = (term) => {
    setSearch(term)
  }
  const handleSearchVideo = () => { 
    history.push('/Search')
    axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${search}&key=${API_KEY}`)
    .then(res => {
      setVideos(res.data.items)
      setSelectedVideo(res.data.items[1])
  });
}

 
  return(
    <div className="App">
      <Header searchTerms={setSearchState} SearchClick={handleSearchVideo}/>
      <div className="app__page">
        <Sidebar />
          <Route exact path="/">
             <Home/>
          </Route>
          <Route path="/Home">
             <Home/>
          </Route>
          <Route path="/Trending">
            <Trending />
          </Route>
          <Route path="/Search">
            <RecomendVideos videoPlay={videos} />
            <ListVideo videoList={videos}/>
          </Route> 
      </div>
    </div>
  )
}
export default App;
