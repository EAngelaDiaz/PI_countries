import { GET_COUNTRIES, GET_BY_NAME, GET_BY_ID } from "../action-types/action-types";


const initialState = {
    allCountries: [],
    country: {},
    allActivities: [],
}

const reducer = (state = initialState, { type, payload}) => {
    switch(type){
        case GET_COUNTRIES:
            return{
                ...state,
                allCountries:payload,
                countriesCopy:payload,
            }
        case GET_BY_NAME:
            return{
                ...state,
                allCountries:payload,
            }      
        case GET_BY_ID:   
            return{
                ...state,
                country:payload
            } 
            
       default:
        return {...state}
    }
};

export default reducer;