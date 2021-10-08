import React from 'react';
import "./Sidebar.css";
import ChatIcon from '@mui/icons-material/Chat';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Avatar, Button } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SidebarChat from './SidebarChat';
function sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
            <Avatar src="https://avatars.githubusercontent.com/u/78830028?s=400&u=52f1ecce70318c9097b5b462c1a4e854c0ba8058&v=4">

            </Avatar>

                <div className="sidebar__headerRight">
                    
                        <Button className="donut">
                            <DonutLargeIcon fontSize="medium" />
                        </Button>

                        <Button className="message">
                            <ChatIcon fontSize="medium"/>
                        </Button>
                        
                        <Button className="option">
                            <MoreVertIcon fontSize="medium"/>
                        </Button>
                 

                </div>
            </div>

            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlinedIcon/>
                    
                    <input placeholder="Search or start new chat" type="text"/>
                </div>

            </div>


            <div className="sidebar__chats">
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
            </div>

        </div>
    )
}

export default sidebar
