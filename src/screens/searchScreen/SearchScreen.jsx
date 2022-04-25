import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import HorizontalVideo from '../../components/horizontalVideo/HorizontalVideo';
import { getSearchedVideo } from '../../redux/actions/video.action';

const SearchScreen = () => {
    const {query}= useParams(); 
    const dispatch = useDispatch();
    const {videos,loading} = useSelector(state=>state.searchedVideos) ;
    useEffect(()=>{
        dispatch(getSearchedVideo(query))
    },[dispatch,query])

    
  return (
    <div>{
        !loading && (
            videos?.map((video)=>(
                <HorizontalVideo key={video?.id?.videoId} relatedVideo={video} id={video?.id?.videoId} />
                )
            )
        )
        }</div>
  )
}

export default SearchScreen