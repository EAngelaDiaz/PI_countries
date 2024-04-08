import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getByName } from "../../redux/actions/actions";
import './searchBar.style.css'

const SearchBar = (event) => {
   const dispatch = useDispatch();
   const [country, setCountry] = useState('')

   const handleChange = (event) => {
      event.preventDefault()
      setCountry(event.target.value)
   }

   function handleSubmit (event) {
      event.preventDefault()
      dispatch(getByName(country))
   }

   return (
      <div className="barra_busqueda">
        <input className='busqueda' placeholder="Busqueda..." type="text" onChange={handleChange} value={country} />
         <button className="boton_busqueda" onClick={handleSubmit}>Buscar</button>
      </div>
   );
}

export default SearchBar

