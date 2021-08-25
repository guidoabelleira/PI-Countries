import Country from '../country/index';
import style from './Countries.module.css';

export default function Countries({countries}) {
    return (
    <div className={style.cards}>
        {
            countries.map((country) => {
                
                return <Country 
                key={country.alpha3Code}
                flag={country.flag} 
                name={country.name} 
                region={country.region}
                id={country.alpha3Code}
                />
                
            })
        }
    </div>
    )
};

// Imagen de la bandera
// Nombre
// Continente