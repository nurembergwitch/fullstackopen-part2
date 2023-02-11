const Info = ({ person, deletePerson }) => {
    return (
        <li key={person.name}>{person.name} - {person.phone} <button onClick={() => { deletePerson(person.id) }}>[remove]</button></li>
    )
}

export default Info