import React from 'react'
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';


function Header() {
    return (
        <div className='header'>
            
            <div className="header_left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Linkedin.svg/1200px-Linkedin.svg.png" alt=""/>
                
                <div className="header_search">
                    <SearchIcon />
                    <input  placeholder="search" type="text"/>

                </div>


            </div>

            <div className="header_right">
                <HeaderOption Icon={HomeIcon} title="Home"/>
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
                <HeaderOption Icon={ChatIcon} title="Messaging"/>
                <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
                <HeaderOption avatar="https://nptel.ac.in/content/noc/NOC19/SEM2/Candidate_photos/STSEP191143703_photo.jpeg" title="Me"/>
            </div>
        </div>
    )
}

export default Header
