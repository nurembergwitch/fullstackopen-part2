import axios from 'axios'
import { useState, useEffect } from 'react'
import countryService from './services/countries'

//import Country from './components/Country'
import Countries from './components/Countries'
import Search from './components/Search'

function App() {

  //getting all countries at first
  //setcountries needs to be stringified
  const [countries, setCountries] = useState([])
  useEffect(() => {
    countryService
      .getAll()
      .then(initialCountries => {
        setCountries(initialCountries)
      })
  }, [])

  /*
  useEffect(() => {
     if (country) {
       countryService
         .getAll()
         .then(initialCountries => {
           setCountries(initialCountries)
         })
     }
 
   }, [country])
   */

  //search bar
  const [query, setQuery] = useState('')
  //query is whatever is typed into the search bar
  const handleLookup = (event) => setQuery(event.target.value)
  //whatever matches is returned as countries
  const searchResults = (query, countries) => {
    if (query) {
      return countries.filter(country => country.name.common.toLowerCase().includes(query))
    }
    return countries
  }
  const search = searchResults(query, countries)

  // so pressing the show button is exactly the same as typing the country name in the search
  // --------------NEED TO EDIT THIS
  //const detail = searchResults(country, countries)

  // show button sends a get request to /countries/:id and return 1 single country and also renders a page for it
  // const showDetail = id => {
  //   const country = countries.find(c => c.id === id)

  //   countryService
  //     .countryDetail(id)
  //     .then(returnedCountry => {
  //       setCountries(countries.map(country => country.id !== id ? country : returnedCountry))
  //     })
  //     .catch(error => {
  //       console.log('something went wrong')
  //       console.log(error)
  //     })
  // }

  // const detail = (country) => {
  //   const name = country.name.common
  //   const detail = countries.filter(c => c.name.common === name)
  //   setCountries(detail)
  // }
  const resetAll = () => {
    countryService
      .getAll()
      .then(initialCountries => {
        setCountries(initialCountries)
      })
  }

  return (
    <div>
      <h1>Countries</h1>
      <Search handleLookup={handleLookup} query={query} />
      <Reset onClick={() => resetAll()} />
      <Countries search={search} countries={countries} />
    </div>
  );
}

const Reset = ({ onClick }) => <button onClick={onClick}>show all</button>

export default App;
