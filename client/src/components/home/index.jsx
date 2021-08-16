import {useEffect} from 'react';
// import Country from '../country/index';
import Countries from '../countries/index';
// import {connect} from 'react-redux';
import {getCountries} from '../../actions/index';
import {useDispatch} from 'react-redux';


import Nav from '../nav/index';

function Home(props) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCountries())
    }, []);

    return <div>
        <Nav />
        soy Home
        {/* <Country /> */}
        <Countries />
    </div>
};

export default Home;