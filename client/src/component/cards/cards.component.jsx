import './cards.style.css'
import Card from '../card/card.component'

function Cards({allCountries}) {
  const countriesList = allCountries;
  return (
      <div className='cards-container'>
       {countriesList?.map(country =>
        <Card country = {country} />)}
      </div>
  )
} 

export default Cards
