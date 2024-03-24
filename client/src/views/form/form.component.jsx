import { useState, useEffect } from 'react';
import validation from "../../validation/validation";
import './form.style.css'

const Form = () => {
  const [activityData, setactivityData] = useState({
    name:'',
    difficulty:'',
    duration:'',
    season:'',
    countries: [],
  });

  const [errors, setErrors]= useState({
    name:'',
    difficulty:'',
    duration:'',
    season:'',
    countries: [],
  });

  const handleChange = (event) => {
      setactivityData({
          ...activityData,
          [event.target.name]: event.target.value
      }) 
      setErrors(validation(activityData))
  };

  const onSubmit = (event) => {
   event.preventDefault();
   
  }

  useEffect(() => {
      if(activityData.name !== '' || activityData.difficulty !== '' || activityData.duration !== '' || activityData.season !== '' || activityData.countries !== '' ) {
          const activityValidated = validation(activityData);
          setErrors(activityValidated);
      }
   }, [activityData])

  return(
    
    <form onSubmit={onSubmit}>
        
          <label>Nombre:</label>
          <input name='name' value={activityData.value} onChange={handleChange}></input>
          {errors.name && <p style={{ color: 'red'}}>{errors.name}</p>}
          <hr/>
          <label>Dificultad:</label>
          <input name='difficulty' value={activityData.value} onChange={handleChange}></input>
          {errors.difficulty && <p style={{ color: 'red'}}>{errors.difficulty}</p>}
          <hr/>
          <label>Duración:</label>
          <input name='duration' value={activityData.value} onChange={handleChange}></input>
          {errors.duration && <p style={{ color: 'red'}}>{errors.duration}</p>}
          <hr/>
          <label>Temporada:</label>
          <input name='season' value={activityData.value} onChange={handleChange}></input>
          {errors.season && <p style={{ color: 'red'}}>{errors.season}</p>}
          <hr/>
          <label>Paises:</label>
          <input name='countries' value={activityData.value} onChange={handleChange}></input>
          {errors.countries && <p style={{ color: 'red'}}>{errors.countries}</p>}
          <hr/>
          <button
           type='submit'
           disabled={!activityData.name || !activityData.difficulty || !activityData.season || !activityData.countries || errors.name || errors.difficulty || errors.duration || errors.season || errors.countries}
          >CREAR</button>
       
    </form>
  
  )
}

export default Form;


/*function Create() {
 const [input, setInput] =useState({
  name:'',
  difficulty:'',
  duration:'',
  season:'',
  countries: [],
 })

 const [error, setError] =useState({
  name:'',
  difficulty:'',
  duration:'',
  season:'',
  countries: [],
 })

 const validate = (input) => {
  if(!/^[a-zA-Z]+$/.test(input.name)) {
    error.email = 'No es un nombre válido'
}
if(input.name === '') {
    error.name = 'El campo no puede estar vacío'
}
if(!/^[1-5]$/.test(input.difficulty)) {
    error.difficulty = 'Debe ser un numero entre 1 y 5 inclusive'
}
if(input.difficulty === '') {
  error.difficulty = 'El campo no puede estar vacío'
}

if(/^([0-9]{1,2}):([0-5][0-9]):([0-5][0-9])$/.test(input.duration)) {
    error.password = 'El valor es incorrecto'
}
if(!['Verano', 'Otoño', 'Primavera', 'Invierno'].includes(input.season)) {
    error.password = 'El dato no es valido'
}

if(input.countries.length === 0) {
  error.password = 'El campo no puede estar vacío'
}

}

 function handleChange(event) {
  setInput({
    [event.target.name]:event.target.value})
  
 }

 validate({
  ...input,
  [event.target.name]: event.target.value,
})

const handleSubmit = (event) => {
  event.preventDefault();
  login(userData)
 }


  return (
    <div>
    <form onSubmit={''}>
        <div>
          <label>Nombre:</label>
          <input name='name' value={input.value} onChange={handleChange}></input>
        </div>
        <div>
          <label>Dificultad:</label>
          <input name='difficulty' value={input.value} onChange={handleChange}></input>
        </div>
        <div>
          <label>Duración:</label>
          <input name='duration' value={input.value} onChange={handleChange}></input>
        </div>
        <div>
          <label>Temporada:</label>
          <input name='season' value={input.value} onChange={handleChange}></input>
        </div>
        <div>
          <label>Paises:</label>
          <input name='countries' value={input.value} onChange={handleChange}></input>
        </div>
        <div>
          <button>CREAR</button>
        </div>
    </form>
  </div>
  )
}

export default Create;*/
