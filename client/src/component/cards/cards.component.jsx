import './cards.style.css';
import CardContainer from '../card/card.component';
import { Row, Col } from 'react-bootstrap';  // Importa Row y Col de Bootstrap

function Cards({ currentCountries }) {
  return (
    <Row className="g-3 m-3 p-2">  {/* Ajusta el espaciado */}
      {currentCountries?.map(country => (
        <Col xs={12} sm={6} md={4} lg={3} xl={2} key={country.id}>  {/* Ajuste responsivo */}
          <CardContainer country={country} />
        </Col>
      ))}
    </Row>
  );
}

export default Cards;