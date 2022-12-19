function About() {
    return (
        <div className='container'>
            <img src={require('../img/img_about.jpg')} className='d-block w-100 mt-2' alt='retrato de Santiago Aquino' />
            <p className='text-center p-2'>Estoy en el mundo de la fotografía desde el 2011. Crecí en la ciudad de Treinta y Tres y me mudé a Montevideo para ingresar a la Licenciatura de Fotografía del IENBA, terminando mis estudios en el 2016.
                Actualmente me estoy centrando en la fotografía de beauty y retratos.</p>
        </div>
    )
}

export default About;