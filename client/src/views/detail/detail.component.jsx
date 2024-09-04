import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getById } from "../../redux/actions/actions";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
//import './detail.style.css';

const Detail = () => {
  const { id } = useParams();
  
  
  const dispatch = useDispatch();
  

  useEffect(() => {
    dispatch(getById(id));
    
  }, [dispatch, id]);
  
  const country = useSelector((state) => state.country);
  



  return (
    <div className='container-fluid h-100 p-0'>
  <div className="d-flex justify-content-center bg-light w-100 m-0 p-0">
    <Link to={'/home'}>
      <button className='btn btn-outline-primary m-4 my-5'>Volver</button>
    </Link>
  </div>
  
  <div className="row vh-100 align-items-center justify-content-center m-0">
    <div className="col-md-4 d-flex justify-content-center">
      <img className="img-thumbnail" src={country?.image} alt={country?.name} />
    </div>
    
    <div className="col-md-4 mt-4 text-center text-md-start">
      <h1 className="text-uppercase">{country?.name}</h1>
      <h2 className="fs-4">Capital: {country?.capital}</h2>
      <h2 className="fs-4">Continente: {country?.continent}</h2>
      <h2 className="fs-4">Subregión: {country?.subregion}</h2>
      <h2 className="fs-4">Área: {country?.area}</h2>
      <h2 className="fs-4">Población: {country?.population}</h2>
    </div>
    <div className="container-fluid w-100 p-0 m-0">
        <div className="d-flex flex-column align-items-center justify-content-center w-100">
          <h2 className="text-center my-5">Actividades:</h2>
          <div
            className={`row g-3 m-0 ${
              country?.Activities?.length === 1
                ? 'row-cols-1'
                : country?.Activities?.length === 2
                ? 'row-cols-2'
                : 'row-cols-3'
            }`}
          >
          {country?.Activities?.length > 0 ? (
            country.Activities.map(activity => (
              <div className="col" key={activity.id}>
                <div className="card w-100 h-100 p-2 bg-secundary">
                  <div className="card-body text-center my-5">
                    <p className="fs-3 text-primary-emphasis">Nombre: {activity.name}</p>
                    <p className="fs-5 text-primary-emphasis">Dificultad: {activity.difficulty}</p>
                    <p className="fs-5 text-primary-emphasis">Duración: {activity.duration}</p>
                    <p className="fs-5 text-primary-emphasis">Temporada: {activity.season}</p>
                  </div>
                </div>
              </div>
           ))
          ) : (
            <p className="f-1">No hay actividades</p>
          )}
        </div>
      </div>
    </div>
  </div>
</div>
  )
  }
  



export default Detail








