//import './card.style.css'
import { Link  } from 'react-router-dom';


function Card({country}) {
  const { id, name, image, continent } = country;
  return (
    <Link to={`/detail/${id}`} className="text-decoration-none">
      <div className='card mb-4 shadow-sm border-0'>
        <img className='card-img-top img-fluid' src={image} alt={name} style={{ height: '200px', objectFit: 'cover' }} />
        <div className='card-body'>
          <h1 className='card-title text-center fs-5'>{name}</h1>
          <h3 className='card-text text-center fs-6'>{continent}</h3>
        </div>
      </div>
    </Link>
  )
}

export default Card
