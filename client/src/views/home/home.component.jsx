import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries } from '../../redux/actions/actions';
//import './home.style.css';
import Navbar from '../../component/navbar/navbar.component';
import Cards from '../../component/cards/cards.component';
import Paginated from '../../component/paginated/paginated.component';
import Footer from '../../component/footer/footer'

function Home() {

  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.allCountries);


  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPage, setCountriesPage] = useState(10)
  const indexOfLastCountry = currentPage * countriesPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPage;
  const currentCountries = allCountries.slice(indexOfFirstCountry, indexOfLastCountry);

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

 
  useEffect(() => {
    dispatch(getCountries())
  },[dispatch])


  return (
      <div>
       <Navbar/>
       <Cards currentCountries={currentCountries}/>
       <Paginated
       currentPage={currentPage}
       setCurrentPage={setCurrentPage}
       countriesPage={countriesPage}
       allCountries={allCountries.length}
       paginado={paginado}
       ></Paginated>
       <Footer></Footer>
      </div>
  )
}

export default Home


