import { useEffect } from 'react'
import Navbar from './components/Navbar'
import { useState } from 'react'
import Characters from './components/Characters'
import Pagination from './components/Pagination'

function App() {
  const BASE_API_URL = 'https://rickandmortyapi.com/api/character'

  const [characters, setCharacters] = useState([])
  const [info, setInfo] = useState({})

  const fetchCharacters = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results)
        setInfo(data.info)
      })
      .catch((error) => console.log(error))
  }

  useEffect(() => {
    fetchCharacters(BASE_API_URL)
  }, [])

  const onPrevious = () => {
    fetchCharacters(info.prev)
  }

  const onNext = () => {
    fetchCharacters(info.next)
  }

  return (
    <>
      <Navbar brand="rick and morty app" />
      <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext} />
      <Characters characters={characters} />
      <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext} />
      
    </>
  )
}

export default App
