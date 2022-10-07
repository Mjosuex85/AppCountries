import { REQUEST_COUNTRIES,
        COUNTRIES_SEARCHED,
        ALL_ACTIVITIES,
        BY_CONTINENT,
        BY_ACTIVITIES,
        ORDER_ASC,
        ORDER_DESC,
        POPULATION,
        BY_ID,
        RESET,
        SET_CONTINENTS,
        SET_PAGINATE,
        BY_AREA,
        CONTINENT_SELECTED,
        GET_WEATHER,
        CLEAR,
        FILTER_ACTIVITIES,
        BY_DIFFICULTY,
        BY_SEASON
} from './actions'

const initialState = {
    allCountries: [],
    allCountriesCopy: [],
    activities: [],
    countryDetails: [],
    paginate: 1,
    continents: ["All the World"],
    weather: [],
};

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case REQUEST_COUNTRIES: 
            return {
                ...state,
                allCountries: action.payload,
                allCountriesCopy: action.payload
            };

        case COUNTRIES_SEARCHED:
            return {
                ...state,
                allCountries: action.payload
            };
        
        case ALL_ACTIVITIES:
            return {
                ...state,
                activities: action.payload
            };
        
        case BY_CONTINENT:
            const continents = action.payload === "World" 
            ? state.allCountriesCopy
            : state.allCountriesCopy.filter(c => c.continents === action.payload)
            return {
                ...state,   
                allCountries: continents

            };

        case BY_ACTIVITIES:
            const activities = state.allCountriesCopy.filter((c) => c.activities.find((c) => c.name === action.payload))
            return {
                ...state,
                allCountries: activities
            };

        case ORDER_ASC: 
            function ascend(a, b) {
                if ( a.name < b.name ) { return -1; }
                if ( a.name > b.name ) { return 1; }
                return 0;
            }
            let asc = state.allCountries.sort(ascend)
        
            return {
                ...state,
                allCountries: [...asc]
            };

            case ORDER_DESC:
                function desc(a, b) {
                    if ( a.name > b.name ) { return -1; }
                    if ( a.name < b.name ) { return 1; }
                    return 0;
                }
                let oderDesc = state.allCountries.sort(desc)
    
            return {
                    ...state,
                    allCountries: [...oderDesc]
            };

            case POPULATION:
            let pop;
            const population = state.allCountries
            
            action.payload === 'Population: high to low'
            ?  pop = population.sort((a, b) => b.population - a.population)
            :  pop = population.sort((a, b) => a.population - b.population)
                return {
                     ...state,
                    allCountries: [...pop]
                };

            case BY_ID:
                return {
                    ...state,
                    countryDetails: action.payload,
                };

            case RESET:
                const all = state.allCountriesCopy
                return {
                    ...state,
                    allCountries: all
                };

            case SET_CONTINENTS:
                const x = state.paginate
                return {
                    ...x
                };

            case SET_PAGINATE:
                return {
                    ...state,
                    paginate: action.payload
                };

            case BY_AREA:
            let area;
            const byArea = state.allCountries
            
            action.payload === 'Area: high to low'
            ?  area = byArea.sort((a, b) => b.area - a.area)
            :  area = byArea.sort((a, b) => a.area - b.area)
                return {
                     ...state,
                    allCountries: [...area]
                };

            case CONTINENT_SELECTED: 
                return {
                    ...state,
                    continents: [action.payload]
                };

            case CLEAR: 
                return {
                    ...state,
                    countryDetails: []

                }

            case GET_WEATHER:
                return {
                    ...state,
                    weather: [action.payload]
                };

            /* case FILTER_ACTIVITIES: 
                console.log(action.payload)
                const filterX = state.countryDetails
                return {
                    ...state,
                    activities: activitiesDetails
                }; */

           case BY_SEASON:
                const season = state.allCountriesCopy.filter((c) => c.activities.find((c) => c.season === action.payload))
              return {
                ...state,
                allCountries: [...season]
              }

              case BY_DIFFICULTY:
                const difficulty = state.allCountriesCopy.filter((c) => c.activities.find((c) => c.difficulty === action.payload))
              return {
                ...state,
                allCountries: [...difficulty]
              }

    
    default: {
        return state
    }

    };
};


