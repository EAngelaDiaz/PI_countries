import React from 'react';
import './navbar.style.css'
import { Link } from 'react-router-dom'
import {getActivities, filterByContinent, filterByActivity, orderByAlphabet, orderByPopulation } from '../../redux/actions/actions'
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import SearchBar from '../searchBar/searchBar.component';

function Navbar({handleChange, handleSubmit}) {

  const dispatch = useDispatch();
  const activities = useSelector((state) => state.allActivities)
  const [order, setOrder] = useState('');
  const [selectedContinent, setSelectedContinent] = useState('');
  const [selectedActivity, setSelectedActivity] = useState('');
  
  

  useEffect(() => {
    dispatch(getActivities());
}, [dispatch]);


  function handleFilterContinent(event) {
    dispatch(filterByContinent(event.target.value))
    setSelectedContinent(event.target.value);
    setSelectedActivity('');

  };

  function handleFilterActivity(event) {
    event.preventDefault()
    dispatch(filterByActivity(event.target.value))
    setSelectedActivity(event.target.value);
    setSelectedContinent('');
  }
  

  function handleOrderAlphabet(event) {
    event.preventDefault();
    dispatch(orderByAlphabet(event.target.value))
    setOrder(`Ordenado ${event.target.value}`)
  }

  function handleOrderPopulation(event) {
    event.preventDefault();
    dispatch(orderByPopulation(event.target.value))
    setOrder(`Ordenado ${event.target.value}`)
  }

  return (
    <div className='search-box'>
       <form className='barra_busqueda' onChange={handleChange}>
       <SearchBar onSearch={handleSubmit}/>
       </form>
       <Link to='/form'>
        <button className='boton_crear' >Crear actividad</button>
       </Link>
       <Link to='/'>
        <button className='boton_salir' >Salir</button>
       </Link>
       <div className='filtros'>
        <select onChange={event => handleOrderAlphabet(event)} value={order}>
          <option value=''>Ordenar por:</option>
          <option value='ascendente'>Ascendente</option>
          <option value='descendente'>Descendente</option>
        </select>
        <select onChange={event => handleOrderPopulation(event)} value={order}>
        <option value=''>Ordenar por:</option>
          <option value='menor'>Menor Población</option>
          <option value='mayor'>Mayor Población</option>
        </select>
        <select onChange={event => handleFilterContinent(event)} value={selectedContinent}> 
          <option value=''>Filtrar por continente:</option>
          <option value='Europe'>Europa</option>
          <option value='Africa'>África</option>
          <option value='Oceania'>Oceanía</option>
          <option value='Asia'>Asia</option>
          <option value='Americas'>América</option>
          <option value='Antarctic'>Antártida</option>
        </select>
        <select onChange={event => handleFilterActivity(event)} value={selectedActivity}>
        <option value=''>Filtrar por actividad:</option>
        {activities.map((activity) =>(
          <option key={activity.id} value={activity.name}>{activity.name}</option>))}
        </select>
       </div>
    </div>
  )
}

export default Navbar