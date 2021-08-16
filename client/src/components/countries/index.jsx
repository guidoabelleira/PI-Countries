import { useSelector } from "react-redux"
import Country from '../country/index';
import {Link} from 'react-router-dom';

export default function Countries() {
    var countries = useSelector(state => state.countries)
    return <div>
        {
            countries.map((country) => {
                
                return <Country 
                flag={country?.flag} 
                name={country?.name} 
                region={country?.region}
                />
                
            })
        }
    </div>
};

// Imagen de la bandera
// Nombre
// Continente