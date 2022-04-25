import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getVideoByCategory } from '../../redux/actions/video.action';
import './_categoriesBar.scss'

const CategoriesBar = () => {
  const keywords = [
    'All',
    'Comedy',
    'React js',
    'React Native',
    'use of API',
    'Redux',
    'Music',
    'Algorithm Art ',
    'Guitar',
    'Entertainment',
    'Coding',
    'Cricket',
    'Football',
    'Real Madrid',
    'Gatsby',
    'Poor Coder',
    'Reaction',
 ]
 const [activeElement, setActiveElement] = useState('All');
 const dispatch = useDispatch();
 const handleActiveElement = (word)=>{
   setActiveElement(word)
   dispatch(getVideoByCategory(word));
 }
  return (
    <div className='categoriesBar' >
      {keywords.map((word,i)=>(
        <span onClick={()=>handleActiveElement(word)} key={i} className={activeElement===word?'active':''}>{word}</span>
      ))}
    </div>
  )
}

export default CategoriesBar