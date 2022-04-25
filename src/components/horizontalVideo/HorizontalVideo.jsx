import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import "./_horizontalVideo.scss";
import { AiFillEye } from "react-icons/ai";
import videoRequest from "../../api";
import moment from "moment";
import numeral from "numeral";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

const HorizontalVideo = ({ relatedVideo, id }) => {
  const {
    publishedAt,
    title,
    channelTitle,
    channelId,
    thumbnails: { medium },
  } = relatedVideo.snippet;
  const [duration, setDuration] = useState("");
  const [views, setViews] = useState("");
  const [channelIcon, setChannelIcon] = useState("");
  const seconds = moment.duration(duration).asSeconds();
  const _duration = moment.utc(seconds * 1000).format("mm:ss");

  const isVideo = relatedVideo.id.kind === 'youtube#video'
  useEffect(() => {
    const getVideoDetails = async () => {
      const {
        data: { items },
      } = await videoRequest("/videos", {
        params: {
          part: "contentDetails,statistics",
          id: id,
        },
      });
      setDuration(items[0]?.contentDetails.duration);
      setViews(items[0]?.statistics?.viewCount);
    };
    getVideoDetails();
  }, [id]);

  useEffect(() => {
    const get_channel_icon = async () => {
      const {
        data: { items },
      } = await videoRequest("/channels", {
        params: {
          part: "snippet",
          id: channelId,
        },
      });
      setChannelIcon(items[0].snippet.thumbnails.default);
    };
    get_channel_icon();
  }, [channelId]);
  return (
    <Link to={`/watch/${id}`}>
      <Row className="horizontalVideo">
        <Col xs={6} md={4} className="horizontalVideo__left">
          <LazyLoadImage src={medium.url} alt="" className={!isVideo ? "rounded-circle" : ""} />
          {isVideo && (<span>{_duration}</span>)}
        </Col>
        <Col xs={6} md={8} className="horizontalVideo__right">
          <p className="mb-1 horizontalVideo__right__title">{title}</p>
         {isVideo && ( <div className="mb-1 horizontalVideo__right__details">
            <AiFillEye /> {numeral(views).format("0.a")} Views •
            {moment(publishedAt).fromNow()}
          </div>)}
          <p className="mb-0">{channelTitle}</p>
        </Col>
      </Row>
    </Link>
  );
};

export default HorizontalVideo;
