import React, { useEffect } from  'react';
import { useDispatch, useSelector } from 'react-redux';
import { getComments } from '../../redux/actions/comments.action';
import Comment from '../comment/Comment'
import './_comments.scss';


const Comments = ({commentCount,videoId}) => {

  const dispatch= useDispatch();
  useEffect(()=>{
    dispatch(getComments(videoId))
  },[])

  const commentList= useSelector(state=> state.videoComment.comments);

  const _commentList = commentList?.map(comment=>comment.snippet.topLevelComment.snippet)


  const handleSubmit =()=>{

  }
  return (
    <div className="comments">
      <p>{commentCount} Comments</p>
      <form onSubmit={handleSubmit} className="comments__form w-100">
        <img src="/images/avatar.png" alt="" />
        <input type="text" placeholder="Write a Comment...!" />
        <button>Comment</button>
      </form>
      {_commentList?.map((comment,i)=>(
        <Comment key={i} comment={comment}/>
      ))}
    </div>
  )
}

export default Comments