import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getById } from "../../redux/actions/actions";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import './detail.style.css';

const Detail = () => {
  const { id } = useParams();
  console.log(id);
  
  const dispatch = useDispatch();
  

  useEffect(() => {
    dispatch(getById(id));
    
  }, [dispatch, id]);
  
  const country = useSelector((state) => state.country);
  
  console.log(country);


  return (
    <div>
     <div>
      <button>
      <Link to='/home'>Home</Link>
      </button>
    </div>
    <div>
        <h1>{country?.name}</h1>
         <img src={country?.image}/>
    </div>
    <div>
         <p>Capital: {country?.capital}</p>
         <p>Continente: {country?.continent}</p>
         <p>Subregion: {country?.subregion}</p>
         <p>Área: {country?.area}</p>
         <p>Población: {country?.population}</p>
         </div>
      <h2>Actividades:</h2>
      {country?.Activities?.length > 0 ? (
        country.Activities.map(activity => (
        <div key={activity.id}>
          <p>Nombre: {activity.name}</p>
          <p>Dificultad: {activity.difficulty}</p>
          <p>Duración: {activity.duration}</p>
          <p>Temporada: {activity.season}</p>
        </div>
      ))
    ) : <p>No hay actividades</p>
  }
    </div>
  )}
  



export default Detail








