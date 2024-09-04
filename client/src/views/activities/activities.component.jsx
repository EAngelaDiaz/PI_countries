import React from 'react';
import { Link } from "react-router-dom"
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getActivities, deleteActivity} from '../../redux/actions/actions';
//import './activities.style.css'


function Activities() {

  const dispatch = useDispatch();
  const allActivities = useSelector((state) => state.allActivities);
  
  
  
 const handleActivity = (id) => {
    dispatch(deleteActivity(id));
  };

  useEffect(() => {
    dispatch(getActivities())
  },[dispatch])

  
  return (
    <div className='container-fluid h-100 p-0'>
      <div className="d-flex justify-content-center bg-light w-100 m-0 p-0">
        <Link to={'/form'}>
          <button className='btn btn-outline-primary m-4 my-5'>Volver</button>
        </Link>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-3 m-0 h-100">
        {allActivities?.length > 0 ? (
          allActivities.sort((a, b) => a.id - b.id).map(activity => (
            <div className="col mb-3" key={activity.id}>
              <div className="card h-100">
                <div className='card-body text-center'>
                  <button className='btn btn-primary btn-md m-4' onClick={() => handleActivity(activity.id)}>x</button>
                  <h2 className='card-title'>Numero: {activity.id}</h2>
                  <h1 className='card-title'>Actividad: {activity.name}</h1>
                  <h2 className='card-subtitle mb-2 text-body-secondary'>Dificultad: {activity.difficulty}</h2>
                  <h2 className='card-subtitle mb-2 text-body-secondary'>Duración: {activity.duration}</h2>
                  <h2 className='card-subtitle mb-2 text-body-secondary'>Temporada: {activity.season}</h2>
                  <Link to={`/activities/${activity.id}`}>
                    <button className='btn btn-outline-primary m-4 my-3'>Modificar</button>
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center w-100">No hay actividades</p>
        )}
      </div>
    </div>
  );
}


export default Activities
