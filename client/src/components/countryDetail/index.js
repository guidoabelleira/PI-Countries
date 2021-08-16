import {useState, useEffect} from 'react'
import axios from 'axios';
import {useParams} from 'react-router-dom'

export default function CountryDetail() {
    const [country, setCountry] = useState({});
    const {id} = useParams();
    console.log(id)
    function getCountryByAlpha (id){
        axios.get('COUNTRIES_URL' + id)
        .then((res) => {
            setCountry(res.data)
        })
    };
    useEffect(() => {
        getCountryByAlpha(id)
    }, []);

    return <div>
        
            <h1>{country.name}</h1>
        
    </div>
};