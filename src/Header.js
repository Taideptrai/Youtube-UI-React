import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu'; 
import SearchIcon from '@material-ui/icons/Search'; 
import VideoCallIcon from '@material-ui/icons/VideoCall'; 
import AppsIcon from '@material-ui/icons/Apps'; 
import NotificationsIcon from '@material-ui/icons/Notifications'; 
import Avatar from '@material-ui/core/Avatar'; 

const Header = ({searchTerms,SearchClick}) =>{
  console.log('header render')
  const [searchTerm, setSearchTerm] = React.useState("");
  useEffect(() => {
    searchTerms(searchTerm) //send searchTerm state to app by searchTearm props
  }, [searchTerm])
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  }
  return(
    <div className="header">
        <div className="header__left">
            <MenuIcon></MenuIcon>
            <img className="header__logo" src="/youtube.svg" alt="logo" />
        </div>
        <div className="header__input">
            <input value={searchTerm} onChange={handleChange} placeholder="Search" type="text"></input>
            <SearchIcon onClick={SearchClick} className="header__inputButton"></SearchIcon>
        </div>
        
        <div className="header__icons">
            <VideoCallIcon className="header__icon"></VideoCallIcon>
            <AppsIcon className="header__icon"></AppsIcon>
            <NotificationsIcon className="header__icon"></NotificationsIcon>
            <Avatar alt="user"></Avatar>
        </div>
    </div>  
  )
}
export default Header;
