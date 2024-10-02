import React from 'react';
import { Link } from "react-router-dom"
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getActivities, deleteActivity} from '../../redux/actions/actions';
//import './activities.style.css'
import Footer from '../../component/footer/footer'

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
    <div className='d-flex flex-column min-vh-100'>
    <div className='container-fluid flex-grow-1 p-0'>
      <div className="d-flex justify-content-center bg-primary bg-opacity-50 w-100 m-0 p-0">
        <Link to={'/form'}>
          <button className='btn btn-primary m-4 my-5 custom-fs'>Volver</button>
        </Link>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-3 m-0 flex-grow-1 d-flex justify-content-center align-items-center">
        {allActivities?.length > 0 ? (
          allActivities.sort((a, b) => a.id - b.id).map(activity => (
            <div className="col mb-3" key={activity.id}>
              <div className="card h-50 w-100">
                <div className='card-body text-center'>
                  <button className='btn btn-primary btn-md m-3 py-1  custom-fs' onClick={() => handleActivity(activity.id)}>x</button>
                  <h2 className='card-title fs-3'>Numero: {activity.id}</h2>
                  <h1 className='card-title fs-2 py-2'>Actividad: {activity.name}</h1>
                  <h2 className='card-subtitle mb-2 text-body-secondary fs-6'>Dificultad: {activity.difficulty}</h2>
                  <h2 className='card-subtitle mb-2 text-body-secondary fs-6'>Duración: {activity.duration}</h2>
                  <h2 className='card-subtitle mb-2 text-body-secondary fs-6'>Temporada: {activity.season}</h2>
                  <Link to={`/activities/${activity.id}`}>
                    <button className='btn btn-primary m-4 my-3'>Modificar</button>
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center w-100 fs-4">No hay actividades</p>
        )}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}


export default Activities
