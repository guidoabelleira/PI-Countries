import axios from 'axios';
import { COUNTRIES_URL, ACTIVITIES_URL } from "../constantes";
import { GET_COUNTRIES, ADD_ACTIVITY, GET_ACTIVITY } from "./actionsTypes";



export function getCountries() {
    return function(dispatch) {
        return axios.get(COUNTRIES_URL)
        .then((countries) => {
            dispatch({
                type: GET_COUNTRIES,
                payload: countries.data
            })
        })
            
    }
    
}
export function addActivity(payload) {
    return {
        type: ADD_ACTIVITY,
        payload: payload
    }
}

export function getActivity() {
    return function(dispatch) {
        fetch(ACTIVITIES_URL)
        .then(response => response.json())
        .then(json => {
            dispatch({
                type: GET_ACTIVITY,
                payload: json
            })
        })
    }
}

export function orderAsc() {
    return 
}




// return function(dispatch) {
    //     return axios.get(COUNTRIES_URL)
    //     .then((countries) => {
    //         dispatch({
    //             type: GET_COUNTRIES,
    //             payload: countries.data
    //         })
    //     })
    // }
    // return async function(dispatch) {
    //     const res = await axios.get(COUNTRIES_URL)
    //     dispatch({
    //         type: GET_COUNTRIES,
    //         payload: res.data
    //     }) 
    // }