import Layout from "../layout/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTumblr } from "@fortawesome/free-brands-svg-icons";

export default function About() {
  return (
    <Layout>
      <div className="container">
        <div className="text-center">
          <img
            src={require("../img/img_about.jpg")}
            className="img-fluid"
            alt="retrato de Santiago Aquino"
          />
        </div>
        <div className="row justify-content-center">
          <p className="text-center pt-3 pb-3 col-sm-12 col-md-10 col-lg-8">
            Estoy en el mundo de la fotografía desde el 2011. Crecí en la ciudad
            de Treinta y Tres y me mudé a Montevideo para ingresar a la
            Licenciatura de Fotografía del IENBA, terminando mis estudios en el
            2016. Actualmente me estoy centrando en la fotografía de beauty y
            retratos.
          </p>
        </div>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://tumblr.com" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faTumblr} />
        </a>
      </div>
    </Layout>
  );
}
