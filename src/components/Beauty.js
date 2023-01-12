import Carousel from 'react-bootstrap/Carousel';
import Layout from '../layout/Layout';

export default function Beauty() {
    return (
        <>
            <Layout>
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
            </Layout>
        </>
    );
};