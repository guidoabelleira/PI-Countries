import { useSelector } from "react-redux"


export default function Countries() {
    const countries = useSelector(state => state.countries)
    return <div>
        {
            countries.map((country) => {
                console.log(country)
                return <p>{country.name}</p>
            })
        }
    </div>
};