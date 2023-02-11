import { useState, useEffect } from 'react'
import phoneService from './services/phones'

import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Filter from './components/Filter'
import Notification from './components/Notification'
import ErrorNotification from './components/ErrorNotification'
import SuccessNotification from './components/SuccessNotification'

const App = () => {

  //load stuff, change initial state (persons)
  useEffect(() => {
    phoneService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  // useEffect(hook, [])
  const [persons, setPersons] = useState([])

  // const [persons, setPersons] = useState([
  //   { name: 'Arto Hellas', phone: '389233332' },
  //   { name: 'A Real Person', phone: '123456799' },
  //   { name: 'The Hatman', phone: '666666' },
  //   { name: 'Sal Mon', phone: '89922292' },
  // ])
  const [newName, setNewName] = useState('enter name')
  const handleNameChange = (event) => setNewName(event.target.value)
  //newName is now whatever the input value is

  const [newPhone, setNewPhone] = useState('add phone')
  const handlePhoneChange = (event) => setNewPhone(event.target.value)

  //notifs when sb is added
  const [notif, setNotif] = useState(null)

  const addPerson = (event) => {
    event.preventDefault()
    const copy = persons.find(person => person.name === newName)
    if (copy) {
      if (window.confirm(`${newName} is already in the phonebook. Would you like to replace the number? `)) {
        const changedPhone = { ...copy, phone: newPhone }

        phoneService
          .update(copy.id, changedPhone)
          .then(returnedPerson => {
            setPersons(persons.map(person => person.id !== copy.id ? person : returnedPerson))
          })
          .catch(error => {
            alert(`something went wrong: `, error)
          })
      }
    }
    else if (isNaN(newPhone)) {
      alert(`${newPhone} is not a valid phone number`)
    }
    else {
      const newPerson = {
        name: newName,
        phone: newPhone
      }

      phoneService
        .create(newPerson)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewPhone('')
          //message
          setNotif(`${newPerson.name} added to the phonebook`)
          setTimeout(() => {
            setNotif(null)
          }, 5000)
        })
        //3.19
        .catch(error => {
          setErrNotif(`Person validation failed: name ${newPerson.name} is shorter than the minimum allowed length(3) `)
          console.log(error.response.data.error)
        })
    }
  }

  const [query, setQuery] = useState('')
  const handleLookup = (event) => setQuery(event.target.value)

  const getFilteredItems = (query, persons) => {
    if (query) {
      return persons.filter(person => person.name.toLowerCase().includes(query))
    }
    return persons
  }
  const search = getFilteredItems(query, persons)

  // deleting phones

  const [errNotif, setErrNotif] = useState(null)
  const [successNotif, setSuccessNotif] = useState(null)

  const deletePerson = id => {
    const entry = persons.find(person => person.id === id)

    phoneService
      .yeet(id, entry)
      .then(setPersons(persons.splice(entry, 1)))
      .then(setSuccessNotif(`${entry.name} has been successfully removed`))
      .then(setTimeout(() => {
        setSuccessNotif(null)
      }, 5000))
      .catch(error => {
        setErrNotif(`Person ${entry.name} was already removed from server`)
        console.log(error)
        setTimeout(() => {
          setErrNotif(null)
        }, 5000)
        setPersons(persons.filter(person => person.id !== id))
      })
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notif} />
      <ErrorNotification message={errNotif} />
      <SuccessNotification message={successNotif} />
      <Filter handleLookup={handleLookup} query={query} />
      <PersonForm persons={persons} addPerson={addPerson} newName={newName} handleNameChange={handleNameChange} newPhone={newPhone} handlePhoneChange={handlePhoneChange} />
      <h2>Numbers</h2>
      <Persons search={search} deletePerson={deletePerson} />
    </div>
  )
}

export default App