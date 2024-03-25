import { useState } from "react";
import './searchBar.style.css'

const SearchBar = ({ onSearch }) => {
   const [country, setCountry] = useState('')

   const handleChange = (event) => {
      event.preventDefault()
      setCountry(event.target.value)
   }

   return (
      <div>
          <input className={style.input} type='text'placeholder="Buscar..." value={country} onChange={handleChange} />
         <button className={style.button}onClick={() => onSearch(character)}>Agregar</button> 
      </div>
   );
}

export default SearchBar
