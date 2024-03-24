import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries, getByName } from '../../redux/actions/actions';
import './home.style.css';
import Navbar from '../../component/navbar/navbar.component';
import Cards from '../../component/cards/cards.component';


function Home() {

  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.allCountries);

  const [country, setCountry] = useState('');

  function handleChange(event) {
    event.preventDefault();
    setCountry(event.target.value);
  }

  function handleSubmit (event) {
    event.preventDefault()
    dispatch(getByName(country))
  }

 
  useEffect(() => {
    dispatch(getCountries())
  },[dispatch])


  return (
      <div className='home-container'>
       <h1 className='home-title'>Este es mi Home</h1>
       <Navbar handleChange={handleChange} handleSubmit={handleSubmit}/>
       <Cards allCountries={allCountries}/>
      </div>
  )
}

export default Home




 /*const [filtered, setFiltered] = useState(allCountries);
  const [country, setCountry] = useState('');

  function handleChange(event) {
    event.preventDefault();
    setCountry(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault()
    const filtered = allCountries.filter((country) => 
      country.name.includes(country)
    );
    setFiltered(filtered);
  } */
