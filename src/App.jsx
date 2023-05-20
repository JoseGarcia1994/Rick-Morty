import './App.css'
import Location from './components/Location'
import axios from 'axios'
import { useState, useEffect } from 'react'
import ResidentInfo from './components/ResidentInfo'
import Page from './components/Page'

function App() {
  
  const [rickMortyLocation, setRickMortyLocation] = useState( [] )

  useEffect(() => {
    
    axios
        .get(`https://rickandmortyapi.com/api/location/${ Math.floor(Math.random() * 127)}`)
        .then( (resp) => setRickMortyLocation(resp.data))
        .catch( (error) => console.error(error)  )

  }, [])

<<<<<<< HEAD
  /* ===========================SEARCH BY LOCATION============================ */

=======
>>>>>>> 5aafde267cbe930f785033ad7e5a2d0c151e8071
  const [search, setSearch] = useState("")

  const searchBtn = (e) => {
    e.preventDefault()

    axios
        .get(`https://rickandmortyapi.com/api/location/${search}`)
        .then( (resp) => setRickMortyLocation(resp.data))
        .catch( (error) => console.error(error) ) 
    
        reset()
        setPage(1)
  }

  const reset = () => {
    setSearch("")
  }

/* ===========================PAGES============================ */

  const [page, setPage] = useState(1)
  const perPage = 6 
  const qtyPage = Math.ceil(rickMortyLocation.residents?.length / perPage) 
  const firstIndex = ( page - 1 ) * perPage
  const residents = rickMortyLocation.residents?.slice( firstIndex, firstIndex + perPage)

  return (
    <div className="App">

      <div className='header__container'>
        
        <div className='header'>
          <img className='header__img' src="logo.svg" alt="" />
          <form className='form' onSubmit={ e => searchBtn(e)}>
            <div className='form__input'>
              <input
              className='input' 
              type="text"
              value={search}
              onChange={ (e) => setSearch(e.target.value)}
              required 
              /> 
            </div>
          
            <button className='form__btn' type="submit">Search</button>
          </form>
        </div>
        
      </div>

      <div className='body__container'>
  
        <div className='body'>
          <div className='location'>
            <Location 
            data= { rickMortyLocation }
            />
            <Page 
            page={page}
            setPage={setPage}
            qtyPage={qtyPage}
            />
          </div>
          
          <div className='card'>
            <div className='card__contain'>
              { 
                residents?.map( (resUrl) => (
                <ResidentInfo 
                url={resUrl}
                key={resUrl}
                />
                ))
              }
            </div>
            
          </div>
          

        </div>

      </div>
        
    </div>
  )
}

export default App