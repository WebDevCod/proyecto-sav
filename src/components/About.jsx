import Layout from '../layout/Layout';

export default function About() {
    return (
        <Layout>
            <div className='container'>
                <div className='text-center'>
                    <img src={require('../img/img_about.jpg')} className='img-fluid' alt='retrato de Santiago Aquino' />
                </div>
                <div className='row justify-content-center'>
                    <p className='text-center pt-3 pb-3 col-sm-12 col-md-10 col-lg-8'>Estoy en el mundo de la fotografía desde el 2011. Crecí en la ciudad de Treinta y Tres y me mudé a Montevideo para ingresar a la Licenciatura de Fotografía del IENBA, terminando mis estudios en el 2016.
                        Actualmente me estoy centrando en la fotografía de beauty y retratos.</p>
                </div>
            </div>
        </Layout>
    );
};