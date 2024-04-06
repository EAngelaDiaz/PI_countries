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
      <button className="boton">
      <Link className="enlace" to='/home'>Home</Link>
      </button>
    </div>
  
    <div className="principal">
        <h1>{country?.name}</h1>
         <img src={country?.image}/>
    </div>
    <div className="detalle">
         <h2>Capital: {country?.capital}</h2>
         <h2>Continente: {country?.continent}</h2>
         <h2>Subregion: {country?.subregion}</h2>
         <h2>Área: {country?.area}</h2>
         <h2>Población: {country?.population}</h2>
         </div>
      <h2 className="titulo">Actividades:</h2>
      {country?.Activities?.length > 0 ? (
        country.Activities.map(activity => (
        <div className="actividades" key={activity.id}>
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








