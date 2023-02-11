const OneCountry = ({ country }) => {
    return (
        <div>
            <h2>{country.name.common}</h2>
            <p>capital: {country.capital}</p>
            <p>area: {country.area}</p>
            <p><b>Languages:</b></p>
            <ul>
                {country.languages.map(function (lang, i) {
                    return <li key={i}>{lang}</li>
                })}
            </ul>
            <img src={country.flags.png} />
        </div>
    )
}

export default OneCountry