import Layout from "../layout/Layout";
import Carousel from "react-bootstrap/Carousel";
import Img1 from "../img/carousel-home/01.jpg";
import Img2 from "../img/carousel-home/02.jpg";
import Img3 from "../img/carousel-home/03.jpg";
import Img4 from "../img/carousel-home/04.jpg";
import Img5 from "../img/carousel-home/05.jpg";
import Img6 from "../img/carousel-home/06.jpg";
import Img7 from "../img/carousel-home/07.jpg";
import Img8 from "../img/carousel-home/08.jpg";
import Img9 from "../img/carousel-home/09.jpg";
import Img10 from "../img/carousel-home/10.jpg";

export default function Home() {
  return (
    <Layout>
      <Carousel variant="dark" indicators={false} fade interval={2000}>
        <Carousel.Item>
          <img
            className="d-block mx-auto "
            src={Img1}
            alt="slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block mx-auto "
            src={Img2}
            alt="slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block mx-auto "
            src={Img3}
            alt="slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block mx-auto "
            src={Img4}
            alt="slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block mx-auto "
            src={Img5}
            alt="slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block mx-auto "
            src={Img6}
            alt="slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block mx-auto "
            src={Img7}
            alt="slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block mx-auto "
            src={Img8}
            alt="slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block mx-auto "
            src={Img9}
            alt="slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block mx-auto "
            src={Img10}
            alt="slide"
          />
        </Carousel.Item>
      </Carousel>
    </Layout>
  );
}
