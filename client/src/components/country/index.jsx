import Link from 'react-router-dom';
import style from './Country.module.css';

export default function Country({key, flag, name, region}) {
    return (
    <div className={style.card}> 
        <img src={flag} alt="Err img" />
        <div>
            <h4>{name}</h4>
            <p>{region}</p>
        </div>
        
    </div>
    //
    // <div className={style.card}>
    //     <img src={flag} className={style.img} alt="Err img" />
    //     <div className={style.body}>
    //         <h5 className={style.h5}>{name}</h5>
    //         <p className={style.p}>{region}</p>
    //     </div>
    //     <div className={style.body}>
    //         <link to={`/countries/${key}`}>More..</link>
    //     </div>
    // </div>
    )
    
};

