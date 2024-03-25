import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import validation from "../../validation/validation";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getCountries, postActivity } from '../../redux/actions/actions';


const Form = () => {

  const dispatch = useDispatch();
  const countries = useSelector((state) => state.allCountries)

  const [activityData, setactivityData] = useState({
    id:'',
    name:'',
    difficulty:'',
    duration:'',
    season:'',
    countries: [],
  });

  const [errors, setErrors]= useState({
    id:'',
    name:'',
    difficulty:'',
    duration:'',
    season:'',
    countries: [],
  });

  const handleChange = (event) => {
    event.preventDefault()
      setactivityData({
          ...activityData,
          [event.target.name]: event.target.value
      }) 
      setErrors(validation(activityData))
  };

  const handleSelect = (event) => {
    event.preventDefault()
      setactivityData({
        ...activityData,
        countries:[...activityData.countries, event.target.value]
      })
      
  }

  const handleSubmit = (event) => {
   event.preventDefault();
   console.log(activityData);
   dispatch(postActivity(activityData))
   alert("Actividad creada")
   setactivityData({
    id:'',
    name:'',
    difficulty:'',
    duration:'',
    season:'',
    countries: [],
   })

   
  }

useEffect(() =>{
  dispatch(getCountries())
},[])

useEffect(() => {
      if(activityData.id !== '' || activityData.name !== '' || activityData.difficulty !== '' || activityData.duration !== '' || activityData.season !== '' || activityData.countries !== '' ) {
          const activityValidated = validation(activityData);
          setErrors(activityValidated);
      }
   }, [activityData])

return(
  <div>
    <Link to='/home'>
        <button>Home</button>
    </Link>
    <form onSubmit={(e)=>handleSubmit(e)}>
      <div>
      <label>Numero:</label>
      <input 
        name='id' 
        value={activityData.value} 
        onChange={handleChange}>
      </input>
          {errors.id && 
          <p style={{ color: 'red'}}>
          {errors.id}
          </p>}
      </div>
      <div>
        <label>Nombre:</label>
        <input 
        name='name' 
        value={activityData.value} 
        onChange={handleChange}
        ></input>
          {errors.name && 
          <p style={{ color: 'red'}}>
          {errors.name}
          </p>}
      </div>
      <div>
        <label>Dificultad:</label>
        <input 
        name='difficulty' 
        value={activityData.value} 
        onChange={handleChange}>
        </input>
          {errors.difficulty && 
          <p style={{ color: 'red'}}>
            {errors.difficulty}
          </p>}
      </div>
      <div>
        <label>Duración:</label>
        <input 
        name='duration' 
        value={activityData.value} 
        onChange={handleChange}>
        </input>
          {errors.duration && 
          <p style={{ color: 'red'}}>
            {errors.duration}
            </p>}
      </div>
      <div>
        <label>Temporada:</label>
        <input 
        name='season' 
        value={activityData.value} 
        onChange={handleChange}>
        </input>
          {errors.season && 
          <p style={{ color: 'red'}}>
            {errors.season}
          </p>}
      </div>
      <div>
      <label>Paises:</label>
        <select onChange={event => handleSelect(event)}>
          {countries.map((country) =>(
            <option value={country.name}>{country.name}</option>
          ))}
        </select>
        <ul><li>{activityData.countries.map(e => e + " ,")}</li></ul>
      </div>
          <button
           type='submit'
           disabled={!activityData.id || !activityData.name || !activityData.difficulty || !activityData.season || !activityData.countries || errors.name || errors.difficulty || errors.duration || errors.season}
          >CREAR</button>
    </form>
  </div>
  )
};

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
