
import './App.css'
import Location from './components/Location'
import axios from 'axios'
import { useState, useEffect } from 'react'
import ResidentInfo from './components/ResidentInfo'
import Page from './components/Page'

function App() {
  
  const [rickMortyLocation, setRickMortyLocation] = useState( [] )
  const [randomLocation, setRandomLocation] = useState(1);

  useEffect(() => {
    
    axios
        .get(`https://rickandmortyapi.com/api/location/${randomLocation}`)
        .then( (resp) => setRickMortyLocation(resp.data))
        .catch( (error) => console.error(error)  )

  }, [])

  const generateRandomNumber = () => {
    const numberRandom = Math.floor(Math.random(1) * 126);
    setRandomLocation(numberRandom);
  };
  
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

  const [page, setPage] = useState(1)
  const perPage = 4 
  const qtyPage = Math.ceil(rickMortyLocation.residents?.length / perPage) 

  const firstIndex = (page- 1 ) * perPage

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
              /> 
            </div>
          
            <button className='form__btn' type="submit">Search</button>
          </form>
        </div>
        
      </div>

      <div className='body__container' style={{ backgroundImage: "url(background.png)" }}>
  
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
  )
}

export default App
