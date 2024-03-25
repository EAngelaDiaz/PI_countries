import React from 'react';
import './navbar.style.css'
import { Link } from 'react-router-dom'
import {getActivities, filterByContinent, filterByActivity, orderByAlphabet, orderByPopulation } from '../../redux/actions/actions'
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

function Navbar({handleChange, handleSubmit}) {

  const dispatch = useDispatch();
  const activities = useSelector((state) => state.allActivities)
  const [order, setOrder] = useState('')
  

  useEffect(() => {
    dispatch(getActivities());
}, [dispatch]);




  function handleFilterContinent(event) {
    dispatch(filterByContinent(event.target.value))
  };

  function handleFilterActivity(event) {
    console.log(event)
    event.preventDefault()
    dispatch(filterByActivity(event.target.value))
    console.log(dispatch)
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
       <form onChange={handleChange}>
        <input placeholder='Busqueda'></input>
        <button type='submit' onClick={handleSubmit}>Buscar</button>
       </form>
       <Link to='/form'>
        <button>Crear actividad</button>
       </Link>
       <Link to='/'>
        <button>Salir</button>
       </Link>
       <div>
        <select onChange={event => handleOrderAlphabet(event)}>
          <option value=''>Ordenar por:</option>
          <option value='ascendente'>Ascendente</option>
          <option value='descendente'>Descendente</option>
        </select>
        <select onChange={event => handleOrderPopulation(event)}>
        <option value=''>Ordenar por:</option>
          <option value='menor'>Menor Población</option>
          <option value='mayor'>Mayor Población</option>
        </select>
        <select onChange={event => handleFilterContinent(event)}> 
          <option value=''>Filtrar por continente:</option>
          <option value='Europe'>Europa</option>
          <option value='Africa'>África</option>
          <option value='Oceania'>Oceanía</option>
          <option value='Asia'>Asia</option>
          <option value='North America'>América del Norte</option>
          <option value='South America'>América del Sur</option>
        </select>
        <select onChange={event => handleFilterActivity(event)}>
        <option value=''>Filtrar por actividad:</option>
        {activities.map((activity) =>(
            <option key={activity.id} value={activity.name}>{activity.name}</option>))}
        </select>
       </div>
      </div>
  )
}

export default Navbar