// import Link from 'react-router-dom';

export default function Country(flag, name, region) {
    return <div>
    <h3>{name}</h3>
    <img src={flag} alt="Err img" />
    <p>{region}</p>
    </div>
};