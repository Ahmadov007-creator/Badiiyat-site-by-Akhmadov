import React from 'react'
import { useRef } from 'react'
import './Search.css'

function Search() {
  return (
    <div className='Search'>
      <h1>Qidirish</h1>
      <div className='Search__inner'>
        <input type="text" placeholder='Adiblar, kitoblar, audiolar, maqolalar...' />
        <button>
          <span className='searc'><i class="bi bi-search"></i></span>
          Izlash
        </button>
      </div>
    </div>
  )
}

export default Search
