import {GET_COUNTRIES} from '../actions/actionsTypes';


const initialState = {
    countries: [],
    activities: []
}

function reducer(state = initialState, action){
    switch(action.type) {
        case GET_COUNTRIES:
            return {
                ...state,
                countries: action.payload
            }
        default: return state;
    }
}

export default reducer;