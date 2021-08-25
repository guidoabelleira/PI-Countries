import {useEffect, useState} from 'react';
import Countries from '../countries/index';
import Pagination from '../pagination/index';
import {getCountries} from '../../actions/index';
import {useDispatch, useSelector} from 'react-redux';


import Nav from '../nav/index';

function Home(props) {
    const dispatch = useDispatch();
    const countries = useSelector(state => state.countries)
    
    // const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [countriesPerPage] = useState(9);

    useEffect(async () => {
        await dispatch(getCountries());
        // setLoading(false);
    }, []);

    const indexOfLast = currentPage * countriesPerPage;
    const indexOfFirst = indexOfLast - countriesPerPage;
    const currentCountries = countries.slice(indexOfFirst, indexOfLast);

    function paginate(pageNumber) {
        setCurrentPage(pageNumber)
    }

    return <div>
        <Nav />
        <Countries countries={currentCountries}/>
        <Pagination 
            countriesPerPage={countriesPerPage} 
            totalCountries={countries.length} 
            paginate={paginate}
        />
    </div>
};

export default Home;