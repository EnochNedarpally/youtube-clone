import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import VideoMetaData from '../../components/videoMetaData/VideoMetaData';
import Comments from '../../components/comments/Comments';
import './_watchScreen.scss'
import HorizontalVideo from '../../components/horizontalVideo/HorizontalVideo';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getRelatedVideo, getVideoById } from '../../redux/actions/video.action';

const WatchScreen = () => {
  const {id}=useParams();
  const dispatch= useDispatch();
  const {video,loading}=useSelector(state=>state.selectedVideo);
  const { videos, loading: relatedLoading } = useSelector(
    state => state.relatedVideos
 )
 
  useEffect(()=>{
    dispatch(getVideoById(id));
    dispatch(getRelatedVideo(id));
  },[dispatch,id])

  return (
      <Row>
        <Col lg={8}>
            <div className="watchScreen__player">
                <iframe src={`https://www.youtube.com/embed/${id}`} 
                frameBorder="0"
                title={video?.snippet?.title}
                allowFullScreen
                width='100%'
                height='100%'
                >
                </iframe>
            </div>
            {!loading ? (
               <VideoMetaData video={video} videoId={id} />
            ) : (
               <h6>Loading...</h6>
            )}
            <Comments  commentCount={video?.statistics?.commentCount} videoId={id}/>
        </Col>
        <Col  lg={4}>
           {!relatedLoading &&  (videos
                  ?.filter(video => video.snippet)?.map((video)=>(
                <HorizontalVideo key={video?.id?.videoId} relatedVideo={video}  id={video?.id?.videoId}/>
            )))}
        </Col>

    </Row>
  )
}

export default WatchScreen