import axios from 'axios'
const baseUrl = 'https://restcountries.com/v3.1/all'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const countryDetail = (id) => {
    const request = axios.get(`${baseUrl}/${id}`)
    return request.then(response => response.data)
        .catch(e => {
            console.log(e)
        })
}

export default { getAll, countryDetail }