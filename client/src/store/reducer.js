import { REQUEST_COUNTRIES,
        COUNTRIES_SEARCHED,
        ALL_ACTIVITIES,
        BY_CONTINENT,
        BY_ACTIVITIES
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
            }

        case BY_ACTIVITIES:
            const activities = state.allCountriesCopy.filter(e => e.activities[0])
            const activities_Filtred = activities.filter(e => e.activities[0].name)
            console.log(activities_Filtred)
            return {
                ...state,
                allCountries: [...activities_Filtred]
            } 
    
    default: {
        return state
    }

    };
};


