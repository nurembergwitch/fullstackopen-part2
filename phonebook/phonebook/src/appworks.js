import { useState } from 'react'
import Info from './components/Info'

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', phone: '389233332' },
        { name: 'A Real Person', phone: '123456799' },
        { name: 'The Hatman', phone: '666666' },
        { name: 'Sal Mon', phone: '89922292' },
    ])
    const [newName, setNewName] = useState('enter name')
    const handleNameChange = (event) => setNewName(event.target.value)
    //newName is now whatever the input value is

    const [newPhone, setNewPhone] = useState('add phone')
    const handlePhoneChange = (event) => setNewPhone(event.target.value)

    const addPerson = (event) => {
        event.preventDefault()
        const copy = persons.find(person => person.name === newName)
        if (copy) {
            alert(`${newName} is already in the phonebook`)
        }
        else if (isNaN(newPhone)) {
            alert(`${newPhone} is not a valid phone number`)
        }
        else {
            const newPerson = {
                name: newName,
                phone: newPhone
            }
            setPersons(persons.concat(newPerson))
            setNewName('')
            setNewPhone('')
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

    //const search = showAll ? persons : persons.filter(person => person.name.toLowerCase().includes(query))

    //const srch = () => setShowPeople(query)
    return (
        <div>
            <div>debug: newName is {newName}</div>
            <h2>Phonebook</h2>
            <label>search</label>
            <input onChange={handleLookup} value={query} />
            <form onSubmit={addPerson}>

                <div>
                    name: <input value={newName} onChange={handleNameChange} />
                </div>
                <div>
                    phone: <input value={newPhone} onChange={handlePhoneChange} />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            <ul>
                {search.map(person => <Info key={person.name} person={person} />)}
            </ul>
        </div>
    )
}

export default App