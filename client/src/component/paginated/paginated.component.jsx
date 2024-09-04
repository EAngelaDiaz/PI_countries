//import './paginated.style.css'
import React from 'react'

export default function Paginated({countriesPage, allCountries,  currentPage, setCurrentPage}) {
 
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
  <nav aria-label="Page navigation" class="d-flex justify-content-center">
  <ul className="pagination mt-4">
    <li className="page-item">
      <button className="page-link" onClick={prev}>&laquo; Anterior</button>
    </li>
    <li className="page-item disabled">
      <span className="page-link">{currentPage > nPages ? setCurrentPage(1) : currentPage} de {nPages}</span>
    </li>
    <li className="page-item">
      <button className="page-link" onClick={next}>Siguiente &raquo;</button>
    </li>
  </ul>
</nav>
  
 )
}

{/*<div className='pagination' >
    <button className='boton_paginacion'>
       <h3 onClick={prev}>&laquo;Anterior</h3>
    </button>
       <h3 className='datos'>{currentPage > nPages ? setCurrentPage(1) : currentPage} de {nPages}</h3>
    <button className='boton_paginacion'>
       <h3 onClick={next}>Siguiente&raquo;</h3>
    </button>
  </div>*/}

