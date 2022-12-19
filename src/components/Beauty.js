import Carousel from 'react-bootstrap/Carousel';

function Beauty() {
    return (
        <>
            <div>
                <Carousel controls={false} indicators={false}>
                    <Carousel.Item>
                        <img className="d-block w-100" src={require('../img/beauty/01.jpg')} alt="retrato" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={require('../img/beauty/02.jpg')} alt="retrato" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={require('../img/beauty/03.jpg')} alt="retrato" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={require('../img/beauty/04.jpg')} alt="retrato" />
                    </Carousel.Item>
                </Carousel>
            </div>
        </>
    )
}

export default Beauty;