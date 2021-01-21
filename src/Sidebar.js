import React, { Component } from 'react';
import './Sidebar.css';
import SidebarRow from "./SidebarRow";
import HomeIcon from '@material-ui/icons/Home'; 
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'; 
import HistoryIcon from '@material-ui/icons/History';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import WatchLaterIcon from '@material-ui/icons/WatchLater'; 
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const Sidebar = React.memo(() => {
  console.log('Sidebar render')
  return(
    <div className="sidebar">
      <Link to="/Home"><SidebarRow selected Icon={HomeIcon} title='Home'/></Link>
      <Link to="/Trending"><SidebarRow Icon={WhatshotIcon} title='Trending'/></Link>
      <SidebarRow Icon={SubscriptionsIcon} title='Subscriptions'/>
      <hr />
      <SidebarRow Icon={VideoLibraryIcon} title='Library'/>
      <SidebarRow Icon={HistoryIcon} title='History'/>
      <SidebarRow Icon={OndemandVideoIcon} title='Your videos'/>
      <SidebarRow Icon={WatchLaterIcon} title='Watch Later'/>
      <SidebarRow Icon={ThumbUpAltOutlinedIcon} title='Liked video'/>
      <SidebarRow Icon={ExpandMoreOutlinedIcon} title='Show more'/> 
  </div>
   )
})
export default Sidebar;
