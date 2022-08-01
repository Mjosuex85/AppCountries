const axios = require('axios')
const { Country, Activities } = require('../db')

const url = "https://restcountries.com/v3/all"

const getCountries = async () => {
    const countries = await axios.get(url)
    const data = countries.data
    
    return data.map(country => {
    
    return {
        id: country.cca3,
        name: country.name.common,
        flags: country.flags[0],
        continents: country.continents[0],
        capital: country.hasOwnProperty("capital") ? country.capital[0] : "No Capital",
        subregion: country.subregion,
        area: country.area,
        population: country.population,
    }})

}

const byName = async (name) => {
    const country = await Country.findOne({where: {name: name}})

    return country
}

const byCode = async (code) => {

}

module.exports = {
    getCountries,
    byName,
    byCode
}