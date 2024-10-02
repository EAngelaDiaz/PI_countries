import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getByIdActivity, putActivity } from "../../redux/actions/actions";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import validation from "../../validation/validation";
import './edit.style.css';
import Footer from '../../component/footer/footer'

const Edit = () => {

  const { id } = useParams();
  const dispatch = useDispatch();


  const [activity, setActivity] = useState({
    id: '',
    name: '',
    difficulty: '',
    duration: '',
    season: '',
  });

  const [errors, setErrors]= useState({});

  useEffect(() => {
    dispatch(getByIdActivity(id));  
  }, [dispatch, id]);


  const activityDetails = useSelector((state) => state.activity);

  useEffect(() => {
    setActivity(activityDetails);
    
  },[activityDetails]);

  const handleChange = (event) => {
    console.log(event)
    setActivity({
      ...activity,
      [event.target.name]: event.target.value
    });
  };

  useEffect(() => {
    if( activity.difficulty !== '' || activity.duration !== '' || activity.season !== '') {
        const activityValidated = validation(activity);
        setErrors(activityValidated);
    }
 }, [activity])

  const handleEdit = (event) => {
    event.preventDefault();
    const actionResult = dispatch(putActivity(id, activity));
     
    if (actionResult) {
      alert ("Actividad modificada con exito")
    } else {
      alert ("No se pudo modificar la actividad")
    }
  };

  return (
    <div className='container-fluid h-100 p-0'>
      <div className="d-flex justify-content-center bg-primary bg-opacity-50 w-100 m-0 p-0">
      <Link to={'/activities'}>
      <button className='btn btn-primary m-4 my-5 custom-fs'>Volver</button>
      </Link>
      </div>
      <div className="d-flex justify-content-center align-items-center h-100">
        <div className="form-container w-100" key={activity.id}>
          <form className="border border-primary-subtle border-3 rounded p-4 m-5">
            <div className="mb-3">
          <h1 className="fs-2">Nombre: {activity.name}</h1>
          </div>
          <div className="mb-3">
          <label className="form-label">Dificultad:</label>
          <input className='form-control border-dark' type="text" name="difficulty" value={activity.difficulty} onChange={handleChange} />
          {errors.difficulty && 
            <p style={{ color: 'red'}}>
            {errors.difficulty}
            </p>}
            </div>
            <div className="mb-3">
          <label className="form-label">Duración:</label>
          <input className='form-control border-dark' type="text" name="duration" value={activity.duration} onChange={handleChange} />
          {errors.duration && 
            <p style={{ color: 'red'}}>
            {errors.duration}
            </p>}
            </div>
            <div className="mb-3">
          <label className="form-label">Temporada:</label>
          <select className='form-control border-dark' name='season' value={activity.season} onChange={handleChange}>
           <option value='Verano'>Verano</option>
           <option value='Otoño'>Otoño</option>
           <option value='Primavera'>Primavera</option>
           <option value='Invierno'>Invierno</option>
         </select>
         </div>
          <button 
          className="btn btn-primary my-3 w-100 custom-fs" 
          type="submit"
          disabled={ !activity.difficulty  || !activity.duration || errors.difficulty || errors.duration || !activity.season }
          onClick={handleEdit}
          >Modificar</button>
          </form>
        </div>
      </div>
      <Footer></Footer>
    </div> 
  
  );
};

export default Edit;

