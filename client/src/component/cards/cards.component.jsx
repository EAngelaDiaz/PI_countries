import './cards.style.css'
import Card from '../card/card.component'

function Cards({currentCountries}) {

  return (
      <div className='cards-container'>
       {currentCountries?.map(country =>
        <Card country={country} key={country.id}/>)}
      </div>
  )
} 

export default Cards
