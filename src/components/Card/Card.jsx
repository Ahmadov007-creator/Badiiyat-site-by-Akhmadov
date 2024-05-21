import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Card.css'

function MyCard({item}) {
    const navigation = useNavigate()
  return (
    <div onClick={()=> navigation(`/adib-detail/${item.id}`)} className="adib__card">
    <img src={item.img} alt="" />
    <div className="card__inner">
    <h4 title={item.name}>{item.name.slice(0,15)}...</h4>
    <p>{item.date}</p>
    <span>
      <p><i className="bi bi-book-fill">{item.books}</i></p>
      <p><i className="bi bi-headphones">{item.au}</i></p>
    </span>
    </div>
  </div>
  )
}

export default MyCard
