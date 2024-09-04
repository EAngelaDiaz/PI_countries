import './cards.style.css';
import Card from '../card/card.component';

function Cards({ currentCountries }) {
  // Define el número de columnas basado en la cantidad de tarjetas
  let columnClass;
  if (currentCountries.length === 1) {
    columnClass = 'row-cols-1';
  } else if (currentCountries.length === 2) {
    columnClass = 'row-cols-2';
  } else if (currentCountries.length === 3) {
    columnClass = 'row-cols-3';
  } else if (currentCountries.length === 4) {
    columnClass = 'row-cols-4';
  } else {
    columnClass = 'row-cols-5'; // Para 5 o más tarjetas
  }

  return (
    <div className={`row ${columnClass} g-3 m-3 p-2`}>
      {currentCountries?.map(country => (
        <div className='col' key={country.id}>
          <Card country={country} />
        </div>
      ))}
    </div>
  );
}

export default Cards;