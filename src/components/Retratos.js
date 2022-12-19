import Carousel from 'react-bootstrap/Carousel';

function Retratos() {
    return (
        <>
            <div>
                <Carousel controls={false} indicators={false}>
                    <Carousel.Item>
                        <img className="d-block w-100" src={require('../img/retratos/01.jpg')} alt="retrato" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={require('../img/retratos/02.jpg')} alt="retrato" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={require('../img/retratos/03.jpg')} alt="retrato" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={require('../img/retratos/04.jpg')} alt="retrato" />
                    </Carousel.Item>
                </Carousel>
            </div>
        </>
    )
}

export default Retratos;