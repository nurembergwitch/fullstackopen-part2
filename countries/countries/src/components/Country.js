const Country = ({ country, detail, countries }) => {
    return (
        <li key={country.name.common}>
            {country.name.common} <button onClick={() => detail(country.name.common, countries)}>show</button>
        </li>
    )
}

export default Country