import Layout from '../layout/Layout';

export default function About() {
    return (
        <Layout>
            <div className='container-img'>
                <img src={require('../img/img_about.jpg')} className='img-about' alt='retrato de Santiago Aquino' />
            </div>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='text-center col-12 col-lg-6 fs-5 pb-3'>
                        <p>Estoy en el mundo de la fotografía desde el 2011. Crecí en la ciudad de Treinta y Tres y me mudé a Montevideo para ingresar a la Licenciatura de Fotografía del IENBA, terminando mis estudios en el 2016.
                            Actualmente me estoy centrando en la fotografía de beauty y retratos.</p>
                    </div>
                </div>
            </div>
        </Layout>
    );
};