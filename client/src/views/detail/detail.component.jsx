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
      <Link to={'/home'}>
        <button className='boton'>Volver</button>
      </Link>
    </div>
    <div className="principal">
        <h1 className="nombre_detalle">{country?.name}</h1>
         <img className="bandera" src={country?.image}/>
    
    <div className="detalle">
         <h2>Capital: {country?.capital}</h2>
         <h2>Continente: {country?.continent}</h2>
         <h2>Subregion: {country?.subregion}</h2>
         <h2>Área: {country?.area}</h2>
         <h2>Población: {country?.population}</h2>
    </div>
    </div>
    <div className="titulo">
      <h2 className="subtitulo">Actividades:</h2>
      <div className="actividades_cards">
      {country?.Activities?.length > 0 ? (
        country.Activities.map(activity => (
        <div className="detalle_actividad" key={activity.id}>
          <p>Nombre: {activity.name}</p>
          <p>Dificultad: {activity.difficulty}</p>
          <p>Duración: {activity.duration}</p>
          <p>Temporada: {activity.season}</p>
        </div>
      ))
    ) : <p className="mensaje">No hay actividades</p>
  }
  </div> 
</div>
</div>
  )
  }
  



export default Detail








