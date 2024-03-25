import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getById } from "../../redux/actions/actions";
import { useParams } from "react-router-dom";
//import axios from "axios";
import { Link } from "react-router-dom";

import './detail.style.css';

const Detail = () => {
  const { id } = useParams();
  console.log(id);
  
  const dispatch = useDispatch();
  const country = useSelector((state) => state.country);
  
  console.log(country);


  
  useEffect(() => {
    dispatch(getById(id));
    
  }, [dispatch, id]);

  return (
    <div>
      <Link to='/home'>Home</Link>
        <h1>{country?.name}</h1>
         <p>{country?.capital}</p>
         <p>{country?.continent}</p>
         <p>{country?.subregion}</p>
         <p>{country?.area}</p>
         <p>{country?.population}</p>
         <div>
      <h2>Activities</h2>
      {country?.Activities.map(activity => (
        <div key={activity.id}>
          <p>Name: {activity.name}</p>
          <p>Difficulty: {activity.difficulty}</p>
          <p>Duration: {activity.duration}</p>
          <p>Season: {activity.season}</p>
        </div>
      ))}
    </div>

         <img src={country?.image}/>
    </div>
  );
}
  /*const { id } = useParams();
  const [country, setCountry] = useState({});


useEffect(() => {
    axios(`http://localhost:3001/countries/${id}`).then(
       ({ data }) => {
          if (data.id) {
             setCountry(data);
          } else {
             window.alert('No hay personajes con ese ID');
          }
       }
    );
    return setCountry({});
 }, [id]); 



  return (
      <div>
        <Link to='/home'>Home</Link>
        <h1>{country?.name}</h1>
         <p>{country?.capital}</p>
         <p>{country?.continent}</p>
         <p>{country?.subregion}</p>
         <p>{country?.area}</p>
         <p>{country?.area}</p>
         <img src={country?.image} alt={country.name}/>
      </div>
  )
} */



export default Detail








