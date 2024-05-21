import BookCard from '../../components/BookCard/BookCard'
import Hero from '../../components/Hero/Hero'
import { books } from '../../data/books'
import './Books.css'

function Books() {
  return (
    <div>
      <div className="container">
        <Hero />
        <ul className="book__list">
          {
            books?.map((item, index) => (
              <li key={index} className="book__item">
                <BookCard item={item}/>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Books
