import Country from './Country'
import OneCountry from './OneCountry'

const Countries = ({ search }) => {
    if (search.length > 10) {
        return (
            <p>too many matches, specify another filter</p>
        )
    } else if (search.length === 1) {
        return (
            <div>
                {search.map(country => <OneCountry country={country} />)}
            </div>
        )
    } else {
        return (
            <ul>
                {search.map(country => <Country key={country.name.common} country={country} />)}
            </ul>
        )
    }
}

export default Countries