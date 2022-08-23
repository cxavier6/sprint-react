import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import Header from './components/Header'
import Forms from './components/Forms'
import About from './components/About'
import ProductList from './components/ProductList'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import Teste from './components/Teste'


function App() {
  const [product, setProduct] = useState([])
  const [currentPageUrl, setCurrentPageUrl] = useState("https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1")

  useEffect(() => {
    axios.get(currentPageUrl).then(res => {
      setProduct(res.data.products.map(p => p.name))
    })
  }, [currentPageUrl])


  return (
    <div className="App">
       <Header/>
        <div className='section'>
          <About/>
          <Forms/>
        </div> 
        <div>
          <ProductList product={product} />
        </div>
        <div>
          <Newsletter/>
        </div>
        <div>
          <Footer/>
        </div>
    </div>
  )
}

export default App
