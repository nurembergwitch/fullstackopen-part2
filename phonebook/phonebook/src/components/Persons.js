import Info from './Info'

const Persons = ({ search, deletePerson }) => {
    return (
        <ul>
            {search.map(person => <Info key={person.name} person={person} deletePerson={deletePerson} />)}
        </ul>
    )
}

export default Persons