import './paginated.style.css'
import React from 'react'

export default function Paginated({countriesPage, allCountries, paginado}) {
 const pageNumber = [];

 for ( let i=1; i<=Math.ceil(allCountries/countriesPage); i++) {
  pageNumber.push(i);
 }

 return(
  <nav>
    <ul className='pagination'>
      { pageNumber && pageNumber.map(number => (
        <li className='pagination li' key={number}>
        <a onClick={()=> paginado(number)}>{number}</a>
        </li>
      ))}
    </ul>
  </nav>
 )
}

