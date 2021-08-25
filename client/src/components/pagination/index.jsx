import React from 'react';
import style from './pagination.module.css';

export default function Pagination({countriesPerPage, totalCountries, paginate}) {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalCountries / countriesPerPage); i++) {
        pageNumbers.push(i);
    }
    
    return (
        <nav className={style.nav}>
            <ul className={style.ul}>
                {pageNumbers.map(number => {
                    return <li key={number} >
                        <a className={style.a} onClick={() => paginate(number)} href="">
                            {number}
                        </a>
                    </li>
                })}
            </ul>
        </nav>
    )
}