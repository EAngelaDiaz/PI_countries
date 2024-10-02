//import './landing.style.css';
import React from 'react';
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlane} from "@fortawesome/free-solid-svg-icons";
//import imagen from "../../utils/imagenes/viaje.jpg"
import imagen2 from "../../utils/imagenes/africa.jpg"
import imagen3 from "../../utils/imagenes/brazil.jpg"
import imagen4 from "../../utils/imagenes/francia.jpg"
import imagen5 from "../../utils/imagenes/italia.jpg"
import imagen6 from "../../utils/imagenes/mexico.jpg"
import imagen7 from "../../utils/imagenes/nieve.jpg"
import imagen8 from "../../utils/imagenes/sidney.jpg"
import imagen1 from "../../utils/imagenes/tokio.jpg"
import imagen9 from "../../utils/imagenes/mont.jpg"
import Footer from '../../component/footer/footer';

function Landing() {
  return (
    <div className=''>
    <div className='container w-75 h-75 d-flex justify-content-center align-items-center vh-100'>
    <div className='row row-cols-3 g-0 p-0'>
       
       <div className='col mt-4'>
         <img src={imagen4} className="gallery-item img-fluid w-100 h-100" alt="imagen"/>
       </div>
       <div className='col mt-4'>
         <img src={imagen5} className="gallery-item img-fluid w-100 h-100" alt="imagen"/>
       </div>
       <div className='col mt-4'>
         <img src={imagen6} className="gallery-item img-fluid w-100 h-100" alt="imagen"/>
       </div>
       <div className='col'>
         <img src={imagen1} className="gallery-item img-fluid w-100 h-100" alt="imagen"/>
       </div>
       <div className='col'>
         <img src={imagen2} className="gallery-item img-fluid w-100 h-100" alt="imagen"/>
       </div>
       <div className='col'>
         <img src={imagen3} className="gallery-item img-fluid w-100 h-100" alt="imagen"/>
       </div>
       <div className='col mb-5'>
         <img src={imagen7} className="gallery-item img-fluid w-100 h-100" alt="imagen"/>
       </div>
       <div className='col mb-5'>
         <img src={imagen8} className="gallery-item img-fluid w-100 h-100" alt="imagen"/>
       </div>
       <div className='col mb-5'>
         <img src={imagen9} className="gallery-item img-fluid w-100 h-100" alt="imagen"/>
       </div>
    </div>
    <div className='col-6 ml-3'>
      <p className='text-uppercase display-1 fw-bold m-4'>Encontra</p>
      <p className='text-uppercase display-1 fw-semibold m-4'>tu propia</p>
      <p className='text-uppercase display-1 fw-normal m-4'>aventura</p>
      <Link to={'/home'}>
      <a className="icon-link icon-link-hover fw-normal m-5 fs-1">
        Comencemos
       <FontAwesomeIcon className="bi m-2" aria-hidden="true" icon={faPlane}/>
      </a>
      </Link>
    </div>
    </div>
    <Footer></Footer>
    </div>
    
  
    
  )
}

export default Landing

 {/*  

    <div className='container'>
    <div className='d-flex justify-content-center align-items-center vh-100'>
    <div className="col-6">
      <img src={imagen} class="img-thumbnail" alt="imagen"></img>
    </div>
    
    </div>
  </div>
  
  */}