import React from 'react'
import { useParams } from 'react-router-dom'
import BookCard from '../../components/BookCard/BookCard'
import { adib } from '../../data/adib'
import { books } from '../../data/books'
import './AdibDetail.css'

function AdibDetail() {
  const { id } = useParams()
  let finAdib = adib.find((item) => item.id == id)
  let filBooks = books.filter((item) => item.adibId == id)
  return (
    <div className='adib_box container'>
      <div className="adib_img">
        <img className='adib_img' src={finAdib.img} alt="img" />
        <p className='dat'>Yashagan yillari</p>
        <p className='dat Data'>{finAdib.date}</p>
        <div className="book_rec container">
          <h1 className='rec_h1'>Sizga yoqishi mumkin:</h1>
        <ul className="book__list">
          {
            filBooks?.map((item, index) => (
              <li key={index} className="book_item">
                <BookCard item={item}/>
              </li>
            ))
          }
        </ul>
        </div>
      </div>
      <div className="adib_info">
        <h1 className='adib_h1'>{finAdib.name}</h1>
        <p className='adib_p'>{finAdib.dis.slice(0, 600)}</p>
        
      </div>
    </div>
  )
}

export default AdibDetail
