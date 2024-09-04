//import './card.style.css'
import { Link  } from 'react-router-dom';


function Card({country}) {
  const { id, name, image, continent } = country;
  return (
    <Link className='link-offset-2 link-underline link-underline-opacity-0' to={`/detail/${id}`}>
      <div className='card mb-3 w-100 h-100'>
        <img className='card-img-top img-fluid' src={image} alt={name} />
        <div className='card-body'>
          <h1 className='card-title text-center fs-4'>{name}</h1>
          <h3 className='card-text text-center fs-5'>{continent}</h3>
        </div>
      </div>
    </Link>
  )
}

export default Card
