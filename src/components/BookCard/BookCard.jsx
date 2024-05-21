import React from 'react'
import './BookCard.css'
import { Rate } from 'antd';
import { useNavigate } from 'react-router-dom';

function BookCard({item}) {
    const navigate = useNavigate()
  return (
      <div onClick={()=> navigate(`/book-detail/${item.id}`)} className='BookCard'>
        <img className='book_img' src={item.img} alt="book" />
        <h4>{item.title}</h4>
        <p>{item.author.slice(0,20)}...</p>
        <Rate allowHalf defaultValue={item.rating} />
      </div>
  )
}

export default BookCard
