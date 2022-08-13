import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0)

  const checkIndex = (position) => {
    if(position > people.length - 1) return 0
    if(position < 0) return people.length - 1
    return position
  }
  
  const nextReview = () => setIndex(checkIndex(index + 1))
  const previousReview = () => setIndex(checkIndex(index - 1))
  const randomReview = () => {
    const random = Math.floor(Math.random() * people.length)
    if(random !== index) return setIndex(checkIndex(random))
    setIndex(checkIndex(random + 1))
  }

  const {name, job, text, image} = people[index]

  return <>
    <article className='review'>
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className='quote-icon'><FaQuoteRight/></span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className="button-container">
        <button className='prev-btn' onClick={previousReview}>
          <FaChevronLeft/>
        </button>
        <button className='next-btn' onClick={nextReview}>
          <FaChevronRight/>
        </button>
      </div>
      <button className='random-btn' onClick={randomReview}>
        suprise me
      </button>
    </article>
  </>
};

export default Review;
