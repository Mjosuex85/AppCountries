const axios = require('axios')
const { Country, Activities, CountryActivities } = require('../db')
const { Op } = require('sequelize')

const url = "https://restcountries.com/v3/all"


const include_activities = {
    include: {
        model: Activities, 
        attributes: ["id", "name", "duration", "season", "difficulty"],
        through: {attributes: []}
    }
};

const getCountries = async () => {
    try {
        const countries = await axios.get(url)
    const data = countries.data
    
    // the conten of some subregions keys are null, so it need to be check the info sended to the client
    return data.map(country => {
        return {
            id: country.cca3,
            name: country.name.common,
            flags: country.flags[1],
            continents: country.continents[0],
            capital: country.hasOwnProperty("capital") ? country.capital[0] : "No Capital",
            subregion: country.subregion ? country.subregion : "N/A" ,
            area: country.area,
            population: country.population === "0" ? "?" : country.population,
            fifa: country.fifa ? country.fifa : "No contiene fifa",
            maps: country.maps.googleMaps
        }
    });
    }

    catch(error) {
        console.log(error)
    }
    
};

const countriesDB = async (name) => {
    const countries = await Country.findAll({
        where: {
            name: {
                [Op.iLike]: `%${name}%`
            }
        },
        include: include_activities.include,
        order: [
            ["name", "ASC"]
        ]
    })

    return countries
};

const byId= async (id) => {
    const country_id = await Country.findOne({
        where: {
            id: id
        },
        include: include_activities.include
    })

    const country = country_id === null ? "DIRECCIONAR A 404" : country_id
    return country
};


const eliminateActivityCountry = async (obj) => {

    const toEliminate = await CountryActivities.destroy({
        where:{
            countryId: obj.countryId,
            activityId: obj.activityId
        }
    });
    
    const consultActivity = await CountryActivities.findAll({
        where: {
            activityId: obj.activityId
        }
    });

    if(consultActivity.length < 1) {
        const eliminar = await Activities.destroy({
            where: {
               id: obj.activityId 
            }
        })
        return eliminar
    }

    else {
        console.log("AUN QUEDAN PAISES CON ESA ACTIVIDAD")
    };
}


module.exports = {
    getCountries,
    byId,
    countriesDB,
    include_activities,
    eliminateActivityCountry
};