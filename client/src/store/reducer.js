import { REQUEST_COUNTRIES,
        COUNTRIES_SEARCHED,
        ALL_ACTIVITIES,
        BY_CONTINENT,
        BY_ACTIVITIES,
        ORDER_ASC,
        ORDER_DESC,
        POPULATION,
        BY_ID
} from './actions'

const initialState = {
    allCountries: [],
    allCountriesCopy: [],
    activities: [],
    countryDetails: []
}

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
            const continents = state.allCountriesCopy.filter(c => c.continents === action.payload)
            return {
                ...state,   
                allCountries: [...continents]
            };

        case BY_ACTIVITIES:
            const activities = state.allCountriesCopy.filter(e => e.activities[0])
            const activities_Filtred = activities.filter(e => e.activities[0].name === action.payload)
            console.log(activities_Filtred)
            return {
                ...state,
                allCountries: [...activities_Filtred]
            };

        case ORDER_ASC: 
            function ascend(a, b) {
                if ( a.name < b.name ) { return -1; }
                if ( a.name > b.name ) { return 1; }
                return 0;
            }
            let asc = state.allCountriesCopy.sort(ascend)
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
                let oderDesc = state.allCountriesCopy.sort(desc)
    
            return {
                    ...state,
                    allCountries: [...oderDesc]
            };

            case POPULATION:
            let pop;
            const population = state.allCountriesCopy
            
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
                    countryDetails: action.payload
                }

    
    default: {
        return state
    }

    };
};


