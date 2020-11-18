import React from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add'
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import CallIcon from '@material-ui/icons/Call';
import './Sidebar.css';
import SidebarChannel from './SidebarChannel/SidebarChannel';
import { Avatar } from '@material-ui/core';
import MicIcon from '@material-ui/icons/Mic';
import HeadsetIcon from '@material-ui/icons/Headset';
import SettingsIcon from '@material-ui/icons/Settings';
import { selectUser } from '../../features/userSlice';
import { useSelector } from 'react-redux';
import db, { auth } from  '../../database/firebase';
import { useEffect } from 'react';
import { useState } from 'react';

const Sidebar = () => {
    const selector = useSelector(selectUser);
    const [channels , setChannels] = useState([]);

    useEffect(()=>{
        db.collection('channels').onSnapshot(snapshot=> setChannels(snapshot.docs.map((doc)=>({
            id: doc.id,
            channel: doc.data()
        }))))
    },[])

 const handleAddChannel = ()=>{
     const channelName= prompt('Enter a new channel  name');

     if (channelName){
         db.collection('channels').add({
             channelName:channelName,
         })
     }
 }

    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <h3>Olger Sema</h3>
                <ExpandMoreIcon/>
            </div>
            <div className="sidebar__channels">
                <div className="sidebar__channelsHeader">
                    <div className="sidebar__header">
                    <ExpandMoreIcon/>
                    <h4>Text Channels</h4>
                    </div>
                    <AddIcon onClick={handleAddChannel} className="sidebar__addChannel"/>
                </div>
                <div className="sidebar__channelsList">
                    {channels.map(({id, channel})=>(
                        <SidebarChannel  key="id" id={id} channel={channel.channelName} />
                    ))}
                </div>
            </div>

            <div className="sidebar__voice">
                <SignalCellularAltIcon className="sidebar__voiceIcon" fontSize="large"/>
                <div className="sidebar__voiceInfo">
                    <h3>Voice Connected</h3>
                    <p>Stream</p>
                </div>
                <div className="sidebar__voiceIcons">
                    <InfoOutlinedIcon/>
                    <CallIcon/>
                </div>
            </div>
            <div className="sidebar__profile">
                <Avatar onClick={()=> auth.signOut()} src={selector.photo}/>
                <div className="sidebar__profileInfo">
                    <h3>{selector.displayName}</h3>
                    <p>{selector.uid?.substring(0, 5)}</p>
                </div>
                <div className="sidebar__profileIcons">
                    <MicIcon/>
                    <HeadsetIcon/>
                    <SettingsIcon/>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
