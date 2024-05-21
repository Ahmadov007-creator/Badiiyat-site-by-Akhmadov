import React from 'react'
import { useParams } from 'react-router-dom'
import BookCard from '../../components/BookCard/BookCard'
import { books } from '../../data/books'
import './BooksDetail.css'

function BooksDetail() {
  let { slug } = useParams()
  let finBook = books.find((i) => i.id == slug)
  let fillBooks = books.filter((i) => i.category == finBook.category && i.id != finBook.id)
  return (
    <div className='BooksDetail container'>
      <div className="books_box df">
        <div className="books_img">
          <img className='book_img' src={finBook.img} alt="img" />
        </div>
        <div className="books_info">
          <h1 className='book_h1'>{finBook.title}</h1>
          <div className="box_rat df">
            <h2 className='book_h2'>{finBook.author}</h2> | <span className='span_book'><i class="bi bi-star-fill"></i></span> {finBook.rating}
          </div>
          <p className='p_pages'>Sahifalar soni:    <span className='p_data'>{finBook.pages}</span></p>
          <p className='p_pages'>Chop etilgan sanasi:    <span className='p_data'>{finBook.date}</span></p>
          <p className='p_pages'>Janri:     <span className='p_data'>{finBook.category}</span></p>
          <p className='p_pages'>Nashriyot:     <span className='p_data'>{finBook.nash}</span></p>
          <h4 className="info_h4">To'liq ma'lumot  <i class="bi bi-arrow-down"></i>:</h4>
          <p className="lor_p">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab architecto natus ea dicta rem, nisi quo, illo neque inventore aperiam vitae. Placeat sed animi esse hic eius, blanditiis quo aut earum nulla laborum quis repellendus voluptatibus quasi harum autem perferendis non corporis necessitatibus quidem dignissimos, fugiat aliquid. Aperiam, alias, nesciunt ipsam eveniet, aliquam a voluptas dignissimos voluptatum fugiat ratione molestias.
          </p>
        </div>
      </div>
      <ul className="bd__list">
        {
          fillBooks?.map((item, index) => (
            <li key={index} className="bd__item">
                <BookCard item={item}/>
            </li>
          ))
        }

      </ul>
    </div>
  )
}

export default BooksDetail
