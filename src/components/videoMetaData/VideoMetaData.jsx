import React, { useEffect } from "react";
import "./_videoMetaData.scss";
import moment from "moment";
import numeral from "numeral";

import { MdThumbUp, MdThumbDown } from "react-icons/md";
import ShowMoreText from "react-show-more-text";
import { useDispatch, useSelector } from "react-redux";
import { getChannelById } from "../../redux/actions/channel.action";


const VideoMetaData = ({ video: { snippet, statistics }, videoId }) => {
  const { channelId, channelTitle, description, title, publishedAt } = snippet
  const { viewCount, likeCount, dislikeCount, } = statistics

  const {snippet:channelSnippet,statistics:channelStatistics}= useSelector(state=>state.selectedChannel.channel);

  const dispatch=useDispatch();
  useEffect(()=>{
      dispatch(getChannelById(channelId));
  },[dispatch,channelId])
  console.log(dislikeCount)
  return (
    <div className="videometaData p-2 ">
      <div className="videometaData__top">
        <h5>{title}</h5>
        <div className="d-flex justify-content-between mb-1">
          <span>
            {numeral(viewCount).format("0.a")} Views •
            {moment(publishedAt).fromNow()}
          </span>
          <div>
            <span>
              <MdThumbUp size={26} /> {numeral(likeCount).format("0.a")}
            </span>
            <span className="mx-2">
              <MdThumbDown size={26} /> {numeral(dislikeCount).format("0.a")}
            </span>
          </div>
        </div>
      </div>
      <div className="videometaData__channel d-flex justify-content-between align-items-center py-2">
        <div className="d-flex align-items-center">
          <img src={channelSnippet?.thumbnails.default.url} className="rounded-circle" alt="Channel Icon" />
          <div className="d-flex flex-column mx-2">
            <span className="text-sm">{channelTitle}</span>
            <span> {numeral(channelStatistics?.subscriberCount).format("0.a")} Subscribers</span>
          </div>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="videometaData__description my-2">
        <ShowMoreText
          lines={2}
          more="SHOW MORE"
          less="SHOW LESS"
          anchorClass="showMoreText"
          expanded={false}
        > 
          {description}
        </ShowMoreText>
      </div>
    </div>
  );
};

export default VideoMetaData;
