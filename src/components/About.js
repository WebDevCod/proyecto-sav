import Layout from '../layout/Layout';

export default function About() {
    return (
        <Layout>
            <div className='container'>
                <div className='img-about'>
                    <img src={require('../img/img_about.jpg')} alt='retrato de Santiago Aquino' />
                </div>
                <p className='mt-3 fs-5 text-start'>Estoy en el mundo de la fotografía desde el 2011. Crecí en la ciudad de Treinta y Tres y me mudé a Montevideo para ingresar a la Licenciatura de Fotografía del IENBA, terminando mis estudios en el 2016.
                    Actualmente me estoy centrando en la fotografía de beauty y retratos.</p>
            </div>
        </Layout>
    );
};