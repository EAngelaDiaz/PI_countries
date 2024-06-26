import './paginated.style.css'
import React from 'react'

export default function Paginated({countriesPage, allCountries, paginado, currentPage, setCurrentPage}) {
 let nPages;
 
 for ( let i=1; i<=Math.ceil(allCountries/countriesPage); i++) {
  nPages = i
 }

 const next = () => {
  if(currentPage !== nPages) {
    setCurrentPage(currentPage + 1);
  }
 }

 const prev = () => {
  if(currentPage !== 1) {
    setCurrentPage(currentPage - 1);
  }
 }

 return(
  
  <div className='pagination' >
    <button className='boton_paginacion'>
       <h3 onClick={prev}>&laquo;Anterior</h3>
    </button>
       <h3 className='datos'>{currentPage > nPages ? setCurrentPage(1) : currentPage} de {nPages}</h3>
    <button className='boton_paginacion'>
       <h3 onClick={next}>Siguiente&raquo;</h3>
    </button>
  </div>
 )
}


