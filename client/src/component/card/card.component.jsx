import './card.style.css'
import { Link  } from 'react-router-dom';


function Card({country}) {
  const { id, name, image, continent } = country;
  return (
    <Link  to={`/detail/${id}`}>
      <div className='card-container'>
       <h1>{name}</h1>
       <img src={image} alt={name} />
       <h2>{continent}</h2>
      </div>
    </Link>
  )
}

export default Card
