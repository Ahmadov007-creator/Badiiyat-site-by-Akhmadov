import React, { use } from 'react'
import MyCard from '../../components/Card/Card'
import Hero from '../../components/Hero/Hero'
import { adib } from '../../data/adib'
import './Home.css'

function Home() {
  return (
    <div className='container'>
      <Hero />
      <ul className="home__list">
        {
          adib.map((item, index)=>(
            <li key={index} className="home__item">
            <MyCard item={item}/>
          </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Home
