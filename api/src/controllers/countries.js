const axios = require('axios')
const { Country, Activities } = require('../db')

const url = "https://restcountries.com/v3/all"
/* const url_name = `https://restcountries.com/v3/name/${name}` */

const getCountries = async (name) => {

    const countries = !name ? await axios.get(url) : await axios.get(url_name)
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
        }
    });
};

const byId= async (id) => {
    const country_id = await Country.findOne({
        where: {
            id: id
        },
        include: {
            model: Activities, through: {attributes: []}
        }
    })

    return country_id
};

module.exports = {
    getCountries,
    byId
};