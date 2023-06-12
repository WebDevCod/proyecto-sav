import Layout from "../layout/Layout";
import imgAbout from "../img/img_about.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function About() {
  return (
    <Layout>
      <div className="container container-about">
        <div className="row">
          <div className="col-lg-6 text-center pb-5">
            <img
              src={imgAbout}
              className="img-fluid"
              alt="Retrato de Santiago Aquino"
            />
          </div>

          <div className="col-lg-6 text-about">
            <p>
              En 2011 comencé mis estudios en la Licenciatura de Fotografía en
              el IENBA, los cuales finalicé en 2016.
            </p>
            <p>
              En 2019, tuve la oportunidad de exhibir mi trabajo titulado
              "Interioridad Rasgada". Esta exposición consistió en una selección
              de retratos y autorretratos la cual se llevó a cabo en la sala de
              exposiciones Aurelio González de la escuela de fotografía
              Aquelarre, ubicada en Montevideo y en el Museo Agustín Araújo,
              localizado en Treinta y Tres.
            </p>
            <p>
              En la actualidad, me dedico principalmente a trabajar en el campo
              de la belleza y los retratos.
            </p>
          </div>
        </div>

        <div className="contact text-center pb-3">
          <h2>CONTACTO</h2>
          <a href="mailto:savfotografia@gmail.com">savfotografia@gmail.com</a>
        </div>
        <div className="social-media-icons pb-5 d-flex justify-content-center">
          <a
            href="https://www.instagram.com/santiagoaquinofoto"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
    </Layout>
  );
}
