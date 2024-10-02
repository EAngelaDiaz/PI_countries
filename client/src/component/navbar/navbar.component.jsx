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
    <nav className="navbar navbar-expand-lg navbar-light bg-primary bg-opacity-50">
    <div className="container-fluid">
       <form className="d-flex ms-auto me-4" onChange={handleChange}>
       <SearchBar onSearch={handleSubmit}/>
       </form>
       <div className='d-flex'>
       <Link to='/form'>
        <button className="btn btn-primary me-3 custom-fs" >Crear actividad</button>
       </Link>
       </div>
       <div className='d-flex'>
       <Link to='/'>
        <button className="btn btn-primary custom-fs" >Salir</button>
       </Link>
       </div>
       <div className='row row-cols-2 mt-4 m-2'>
       <div className="col">
        <select className="form-select mb-3 w-75 " onChange={event => handleOrderAlphabet(event)} value={order}>
          <option className="nav-item" value=''>Ordenar por:</option>
          <option className="nav-item" value='ascendente'>Ascendente</option>
          <option className="nav-item" value='descendente'>Descendente</option>
          </select>
          </div>
          <div className="col">
        <select className="form-select mb-3 w-75 " onChange={event => handleOrderPopulation(event)} value={order}>  
          <option value=''>Ordenar por:</option>
          <option value='menor'>Menor Población</option>
          <option value='mayor'>Mayor Población</option>
        </select>
        </div>
        <div className='col'>
        <select className="form-select mb-2 w-75" onChange={event => handleFilterContinent(event)} value={selectedContinent}> 
          <option value=''>Filtrar por continente:</option>
          <option value='Europe'>Europa</option>
          <option value='Africa'>África</option>
          <option value='Oceania'>Oceanía</option>
          <option value='Asia'>Asia</option>
          <option value='Americas'>América</option>
          <option value='Antarctic'>Antártida</option>
        </select>
        </div>
        <div className='col'>
        <select className="form-select mb-2 w-75" onChange={event => handleFilterActivity(event)} value={selectedActivity}>
        <option value=''>Filtrar por actividad:</option>
        {activities.map((activity) =>(
          <option key={activity.id} value={activity.name}>{activity.name}</option>))}
        </select>
       </div>
       </div>
    </div>
    </nav>
  )
}

export default Navbar