import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getByIdActivity, putActivity } from "../../redux/actions/actions";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import validation from "../../validation/validation";
import './edit.style.css'

const Edit = () => {

  const { id } = useParams();
  const dispatch = useDispatch();

  
  
  // Estado local para almacenar los datos de la actividad
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
    
  }, [activityDetails]);

  const handleChange = (event) => {
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
    <div className="contenedor_edit">
      <Link to={'/activities'}>
      <button className="boton_volver_act">Volver</button>
      </Link>
      <div className="tarjeta_form">
        <div className="datos_actividad" key={activity.id}>
          <h1 className="nombre_edit">Nombre: {activity.name}</h1>
          <label>Dificultad:</label>
          <input className="input_edit" type="text" name="difficulty" value={activity.difficulty} onChange={handleChange} />
          {errors.difficulty && 
            <p style={{ color: 'red'}}>
            {errors.difficulty}
            </p>}
          <label>Duración:</label>
          <input className="input_edit" type="text" name="duration" value={activity.duration} onChange={handleChange} />
          {errors.duration && 
            <p style={{ color: 'red'}}>
            {errors.duration}
            </p>}
          <label>Temporada:</label>
          <select className='selector_edit' name='season' value={activity.season} onChange={handleChange}>
           <option value='Verano'>Verano</option>
           <option value='Otoño'>Otoño</option>
           <option value='Primavera'>Primavera</option>
           <option value='Invierno'>Invierno</option>
         </select>
          <button 
          className="boton_modificar" 
          type="submit"
          disabled={ !activity.difficulty  || !activity.duration || errors.difficulty || errors.duration || !activity.season }
          onClick={handleEdit}
          >Modificar</button>
        </div>
      </div>
    </div> 
  );
};

export default Edit;

  /*const { id } = useParams();


  const [newData, setNewData] = useState({
    difficulty: '',
    duration: '',
    season: '',
  });

  const dispatch = useDispatch();
  const activity = useSelector((state) => state.activity);

  useEffect(() => {
    dispatch(getByIdActivity(id));  
  }, [dispatch, id]);

  const handleChange = (event) => {
    setNewData({
       ...newData, 
       [event.target.name]: event.target.value });
  };

  const handleEdit = (event) => {
    event.preventDefault();
    const { 
      difficulty, 
      duration, 
      season } = newData;
    dispatch(putActivity(id, { difficulty,duration,season }));
  };


  return (
    <div >
      <div className="tarjeta">
          <div className="datos_actividad" key={activity.id}>
            <h1>Nombre: {activity.name}</h1>
            <label>Dificultad:</label>
            <input type="text" name="difficulty" value={activity.difficulty} onChange={event=>handleChange(event)} />
            <label>Duración:</label>
            <input type="text" name="duration" value={activity.duration} onChange={event=>handleChange(event)}  />
            <label>Temporada:</label>
            <input type="text" name="season" value={activity.season} onChange={event=>handleChange(event)} />
          </div>
      </div>
      <div>
        <Link to={'/activities'}>
          <button className="boton_modificar" onChange={event=>handleEdit(event)}>Modificar</button>
        </Link>
      </div>
    </div> 
)}*/


    
    

    /*const { id } = useParams();
    console.log(id);
    
    const dispatch = useDispatch();
    
  
    useEffect(() => {
      dispatch(getByIdActivity(id));
      
    }, [dispatch, id]);

    const activity = useSelector((state) => state.activity);
    console.log(activity);

    const [newData, setNewData] = useState({
        difficulty: '',
        duration: '',
        season: ''
      }); console.log(newData)
    
     
    
      const handleChange = (event) => {
        const { name, value } = event.target;
        setNewData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleEdit = (event) => {
      dispatch(putActivity(event))
    }
      

    return (
        <div >
          <div className="tarjeta">
              <div className="datos_actividad" key={newData.id}>
                <h1>Nombre: {newData.name}</h1>
                <label>Dificultad:</label>
                <input type="text" name="difficulty" value={newData.difficulty} onChange={handleChange} />
                <label>Duración:</label>
                <input type="text" name="duration" value={newData.duration} onChange={handleChange}  />
                <label>Temporada:</label>
                <input type="text" name="season" value={newData.season} onChange={handleChange} />
              </div>
          </div>
          <div>
            <Link to={'/activities'}>
              <button className="boton_modificar" onChange={event=>handleEdit(event)}>Modificar</button>
            </Link>
          </div>
        </div> 
    )
   
  
}


export default Edit;*/