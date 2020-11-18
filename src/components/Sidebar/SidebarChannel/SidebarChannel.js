import React from "react";
import { useDispatch } from "react-redux";
import "./SidebarChannel.css";
import { setChannelInfo } from "../../../features/appSlice";

const SidebarChannel = ({ id, channel }) => {
  const dispatch = useDispatch();
  return (
    <div
      onClick={() =>
        dispatch(
          setChannelInfo({
            channelId: id,
            channelName: channel,
          }),
        )
      }
      className='sidebarChannel'
    >
      <h4>
        <span className='sidebarChannel__hash'>#</span>
        {channel}
      </h4>
    </div>
  );
};

export default SidebarChannel;
