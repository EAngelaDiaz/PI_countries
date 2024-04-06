import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries, getByName } from '../../redux/actions/actions';
import './home.style.css';
import Navbar from '../../component/navbar/navbar.component';
import Cards from '../../component/cards/cards.component';
import Paginated from '../../component/paginated/paginated.component';

function Home() {

  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.allCountries);

  const [country, setCountry] = useState('');

  const [currentPage, setCurrenPage] = useState(1);
  const [countriesPage, setCountriesPage] = useState(10)
  const indexOfLastCountry = currentPage * countriesPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPage;
  const currentCountries = allCountries.slice(indexOfFirstCountry, indexOfLastCountry);

  const paginado = (pageNumber) => {
    setCurrenPage(pageNumber)
  }

  function handleChange(event) {
    event.preventDefault();
    setCountry(event.target.value);
  }

  function handleSubmit (event) {
    event.preventDefault()
    dispatch(getByName(country))
  }

 
  useEffect(() => {
    dispatch(getCountries())
  },[dispatch])


  return (
      <div className='home-container'>
       <Navbar handleChange={handleChange} handleSubmit={handleSubmit}/>
       <Cards currentCountries={currentCountries}/>
       <Paginated
       countriesPage={countriesPage}
       allCountries={allCountries.length}
       paginado={paginado}
       ></Paginated>
      </div>
  )
}

export default Home



