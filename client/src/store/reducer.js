import { REQUEST_COUNTRIES,
        COUNTRIES_SEARCHED,
         ALL_ACTIVITIES 
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
            }
    
    default: {
        return state
    }

    };
};


