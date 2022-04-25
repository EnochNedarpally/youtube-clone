import React from 'react';
import './_comment.scss';
import moment from "moment";  

const Comment = ({comment}) => {
  return (
    <div className='comment w-100'>
        <img src={comment.authorProfileImageUrl} alt="" className="rounded-circle"/>
        <div className="comment__body w-100">
            <p className='head'>{comment.authorDisplayName} •  {moment(comment.publishedAt).fromNow()}</p>
            <p>{comment.textDisplay}</p>
        </div>
    </div>
  )
}

export default Comment