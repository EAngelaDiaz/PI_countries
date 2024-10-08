import React from "react"
import './form.style.css'


export const Form = ({
  activityData,
  errors,
  countries,
  handleChange,
  handleSelect,
  handleDelete,
  handleSubmit,}) => {
  
return(
  <div className="d-flex justify-content-center align-items-center h-100">
  <div className="form-container w-100">
    <form onSubmit={event => handleSubmit(event)} className="border border-primary-subtle border-3 rounded p-4">
      <div className="mb-2">
        <label className="form-label mb-0">Numero:</label>
        <input className="form-control border-dark "
               name='id' 
               value={activityData.id}
               onChange={event => handleChange(event)}
               disabled>
        </input>
      </div>
      <div className="mb-2">
        <label className="form-label mb-0">Nombre:</label>
        <input className="form-control border-dark"
               name='name' 
               value={activityData.name} 
               onChange={event => handleChange(event)}>
        </input>
        {errors.name && 
          <p className="form-text">
            {errors.name}
          </p>}
      </div>
      <div className="mb-2">
        <label className="form-label mb-0">Dificultad:</label>
        <input className="form-control border-dark"
               name='difficulty' 
               value={activityData.difficulty} 
               onChange={event => handleChange(event)}>
        </input>
        {errors.difficulty && 
          <p className="form-text">
            {errors.difficulty}
          </p>}
      </div>
      <div className="mb-2">
        <label className="form-label mb-0">Duración:</label>
        <input className="form-control border-dark"
               name='duration' 
               value={activityData.duration} 
               onChange={event => handleChange(event)}>
        </input>
        {errors.duration && 
          <p className="form-text">
            {errors.duration}
          </p>}
      </div>
      <div className="mb-2">
        <label className="form-label mb-0">Temporada:</label>
        <select className='form-control border-dark' 
                name='season' 
                value={activityData.season} 
                onChange={event => handleChange(event)}>
          <option value=''>Seleccionar...</option>
          <option value='Verano'>Verano</option>
          <option value='Otoño'>Otoño</option>
          <option value='Primavera'>Primavera</option>
          <option value='Invierno'>Invierno</option>
        </select>
      </div>
      <div className="mb-2">
        <label className="form-label mb-0">Paises:</label>
        <select className='form-control border-dark' 
                name='countries' 
                value={activityData.countries} 
                onChange={event => handleSelect(event)}>
          <option value=''>Seleccionar...</option>
          {countries.map((country) => (
            <option value={country.name} key={country.id}>{country.name}</option>
          ))}
        </select>
      </div>
      <div className="row">
      {activityData.countries.map(e => (
        <div className="col-3 mb-3" key={e}>
          <div className="d-flex justify-content-between align-items-center">
          <p className="form-text m-0">{e}</p>
          <button className="btn btn-primary btn-sm custom-fs" type="button" onClick={() => handleDelete(e)}>x</button>
          </div>
        </div>
      ))}
      </div>
      <button className="btn btn-primary my-4 w-100"
              type='submit'
              disabled={!activityData.id || !activityData.name || !activityData.difficulty || errors.id || errors.name || errors.difficulty || errors.duration || activityData.season === '' || activityData.countries.length === 0}>
        CREAR
      </button>
    </form>
  </div>
</div>

)}