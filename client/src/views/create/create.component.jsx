import { useState, useEffect } from 'react';
import validation from "../../validation/validation";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getCountries, postActivity, getActivities } from '../../redux/actions/actions';
import { Form } from '../../component/form/form.component';
import { Link } from "react-router-dom"
//import './create.style.css'

const Create = () => {

  const dispatch = useDispatch();
  const countries = useSelector((state) => state.allCountries)
  const activities = useSelector((state) => state.allActivities)
  

  const [errors, setErrors]= useState({});

  

  const [activityData, setActivityData] = useState({
    id: activities?.length == 0 ? 1 : activities[activities.length - 1].id + 1,
    name: '',
    difficulty:'',
    duration:'',
    season:'',
    countries: [],
  });

  

  useEffect(() =>{
    dispatch(getCountries())
  },[])
  
  const handleChange = (event) => {
    event.preventDefault()
      setActivityData({
          ...activityData,
          [event.target.name]: event.target.value
      }) 
      setErrors(validation({
        ...activityData,
        [event.target.name]: event.target.value
      }))
  };

  const handleSelect = (event) => {
    event.preventDefault()
      setActivityData({
        ...activityData,
        countries:[...activityData.countries, event.target.value]
      })
      
  }
   const handleDelete = (event) => {
    setActivityData({
      ...activityData,
      countries: activityData.countries.filter( country => country !== event)
    })
   }

  
useEffect(() => {
  dispatch(getActivities());
}, [dispatch]);



const handleSubmit = (event) => {
  event.preventDefault();
  

  const nameExists = activityData.name && 
  activities.some(element =>element.name.toUpperCase() === activityData.name.toUpperCase());
  if (nameExists) {
    alert("El nombre ya existe. Por favor elige otro.");
    return;
  }
  
  const actionResult = dispatch(postActivity(activityData));
  
  
  if (actionResult && actionResult.error) {
    
    alert("Hubo un error al crear la actividad. Inténtalo de nuevo.");
  } else {
    
    alert("Actividad creada exitosamente");

    dispatch(getActivities());
    setActivityData({
      id: activities?.length == 0 ? 1 : activities[activities.length - 1].id + 2,
      name:'',
      difficulty:'',
      duration:'',
      season:'',
      countries: [],
     })
    }
  }

useEffect(() => {
      if( activityData.name !== '' || activityData.difficulty !== '' || activityData.duration !== '' || activityData.season !== '' || activityData.countries !== '' ) {
          const activityValidated = validation(activityData);
          setErrors(activityValidated);
      }
   }, [activityData])

return(
  <div className='home-container'>
    <div className="d-flex justify-content-center bg-light h-100 w-100 m-0 p-0">
      
      
        <Link to='/home'>
         <button className="btn btn-outline-primary m-4 my-5">Volver</button>
        </Link>
      
    
        <Link to='/activities'>
         <button className="btn btn-outline-primary m-4 my-5">Actividades</button>
        </Link>
        </div>
    
<div className='d-flex justify-content-center align-items-center my-5'>
    <Form 
      activityData={activityData}
      errors={errors}
      countries={countries}
      handleChange={handleChange}
      handleSelect={handleSelect}
      handleDelete={handleDelete}
      handleSubmit={handleSubmit}
    />
    </div>
  </div>
  );
};


export default Create;

