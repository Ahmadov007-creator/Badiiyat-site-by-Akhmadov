import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import AdibDetail from './pages/AdibDetail/AdibDetail'
import Books from './pages/Books/Books'
import BooksDetail from './pages/BooksDetail/BooksDetail'
import Home from './pages/Home/Home'



function App() {
  

  return (
    <div className='App'>
      <Header />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/book' element={<Books/>}/>
          <Route path='/adib-detail/:id' element={<AdibDetail/>}/>
          <Route path='/book-detail/:slug' element={<BooksDetail/>}/>
        </Routes>
    </div>
  )
}

export default App
