import axios from 'axios';
import { COUNTRIES_URL } from "../constantes";
import { GET_COUNTRIES } from "./actionsTypes";

export function getCountries() {
    // return function(dispatch) {
    //     return axios.get(COUNTRIES_URL)
    //     .then((countries) => {
    //         dispatch({
    //             type: GET_COUNTRIES,
    //             payload: countries.data
    //         })
    //     })
    // }
    return async function(dispatch) {
        const res = await axios.get(COUNTRIES_URL)
        dispatch({
            type: GET_COUNTRIES,
            payload: res.data
        }) 
    }
}
// export function orderAsc() {
//     return 
// }