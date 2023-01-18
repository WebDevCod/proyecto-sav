import Layout from '../layout/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function About() {
  return (
    <Layout>
      <div className='container pt-2'>
        <div className='text-center'>
          <img
            src={require('../img/img_about.jpg')}
            className='img-fluid'
            alt='Retrato de Santiago Aquino'
          />
        </div>
        <div className='row justify-content-center'>
          <p className='text-center pt-3 pb-3 col-sm-12 col-md-10 col-lg-8'>
            Estoy en el mundo de la fotografía desde el 2011. Crecí en la ciudad
            de Treinta y Tres y me mudé a Montevideo para ingresar a la
            Licenciatura de Fotografía del IENBA, terminando mis estudios en el
            2016. Actualmente me estoy centrando en la fotografía de beauty y
            retratos.
          </p>
        </div>
        <div className='contact text-center pb-3'>
          <h6>CONTACTO</h6>
          <a href='mailto:savfotografia@gmail.com'>savfotografia@gmail.com</a>
        </div>
        <div className='social-media-icons pb-5 d-flex justify-content-center'>
          <a href='https://www.instagram.com/santiagoaquinofoto' target='_blank' rel='noreferrer'>
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
    </Layout>
  );
}
