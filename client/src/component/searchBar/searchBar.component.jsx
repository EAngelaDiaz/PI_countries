import { useState } from "react";
import { useDispatch} from 'react-redux';
import { getByName } from "../../redux/actions/actions";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlane} from "@fortawesome/free-solid-svg-icons";
//import './searchBar.style.css'

const SearchBar = (event) => {
   const dispatch = useDispatch();
   const [country, setCountry] = useState('')
   

   const handleChange = (event) => {
      dispatch(getByName(event.target.value));
      setCountry(event.target.value)
      
   }


   function handleSubmit (event) {
      event.preventDefault();
      setCountry('');
      dispatch(getByName(''));
   }

   return (
      <div className=" container-fluid w-100 d-flex">
         <FontAwesomeIcon className="m-3" aria-hidden="true" icon={faPlane}/>
        <input  className="form-control m-1" placeholder="Busqueda..." type="text" onChange={handleChange} value={country} />
         {/*<button className="btn btn-outline-success custom-btn-padding" onClick={handleSubmit}>Limpiar</button>*/}
      </div>
   );
}

export default SearchBar

