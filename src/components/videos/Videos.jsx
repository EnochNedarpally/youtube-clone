import React, { useEffect, useState } from "react";
import "./_videos.scss";
import { AiFillEye } from "react-icons/ai";
import videoRequest from "../../api";
import moment from "moment";
import numeral from "numeral";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from "react-router-dom";


const Videos = ({ video }) => {
  const {
    id,
    snippet: {
      channelId,
      channelTitle,
      publishedAt,
      thumbnails: { medium },
      title,
    }
  } = video;
  const [views, setViews] = useState(null)
  const [duration, setDuration] = useState(null)
  const [channelIcon, setChannelIcon] = useState(null)

  const seconds = moment.duration(duration).asSeconds()
  const _duration = moment.utc(seconds * 1000).format('mm:ss')
  const _videoId = id?.videoId || id
  useEffect(()=>{
    const getVideoDetails=async()=>{
      const {data:{items}}= await videoRequest(
        "/videos",{
          params:{
            part:'contentDetails,statistics',
            id:_videoId
          }
        }
      )
         setDuration(items[0]?.contentDetails.duration)
         setViews(items[0]?.statistics?.viewCount)
    }
    getVideoDetails();
  },[_videoId])

  useEffect(() => {
    const get_channel_icon = async () => {
       const {
          data: { items },
       } = await videoRequest('/channels', {
          params: {
             part: 'snippet',
             id: channelId,
          },
       })
       setChannelIcon(items[0].snippet.thumbnails.default)
    }
    get_channel_icon()
 }, [channelId])

  return (
    <div className="videos">
      <div className="videos__img">
        <Link to ={`/watch/${_videoId}`}>
        <LazyLoadImage
          src={medium.url}
          alt={title}
        />
        </Link>
        <span>{_duration}</span>
      </div>
      <p className="videos__title">{title}</p>
      <div className="videos__info">
        <AiFillEye />
        <span> {numeral(views).format('0.a')} Views • </span>
        <span>  {moment(publishedAt).fromNow()} </span>
      </div>
      <div className="videos__channel">
        <LazyLoadImage
          src={channelIcon?.url}
          alt={channelTitle}
        />
        <span>{channelTitle}</span>
      </div>
    </div>
  );
};

export default Videos;
