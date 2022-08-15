import { REQUEST_COUNTRIES,
        COUNTRIES_SEARCHED,
        ALL_ACTIVITIES,
        BY_CONTINENT,
        BY_ACTIVITIES,
        ORDER_ASC,
        ORDER_DESC,
        POPULATION,
        BY_ID,
        RESET
} from './actions'

const initialState = {
    allCountries: [],
    allCountriesCopy: [],
    activities: [],
    countryDetails: [],
    paginate: {start: 0, finish: 10}
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
            const continents = state.allCountriesCopy.filter(c => c.continents === action.payload)
            return {
                ...state,   
                allCountries: [...continents]

            };

        case BY_ACTIVITIES:
            const activities = state.allCountriesCopy.filter((c) => c.activities.find((c) => c.name === action.payload))
            return {
                ...state,
                allCountries: [...activities]
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
                    countryDetails: action.payload
                };

            case RESET:
                const all = state.allCountriesCopy
                return {
                    ...state,
                    allCountries: [...all]
                }

    
    default: {
        return state
    }

    };
};


