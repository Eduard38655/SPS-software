import style from "../styles/Footer.module.css";

function Footer() {
  return (
    <footer className={style.Container_Footer}>
      <div className={style.Container_Content_Footer}>
        <div className={style.title_Footer}>
          <p>SPS Software</p>
          <p>
            Innovación en software empresarial y soluciones para el mercado
            Dominicano.
          </p>

          <div>
            <a href="#home" aria-label="Ir a inicio">
              <i className="fa-brands fa-linkedin-in" aria-hidden="true"></i>
            </a>
            <a href="#about" aria-label="Ir a sobre SPS">
              <i className="fa-brands fa-facebook-f" aria-hidden="true"></i>
            </a>
            <a href="#contact" aria-label="Ir a contacto">
              <i className="fa-brands fa-youtube" aria-hidden="true"></i>
            </a>
          </div>
        </div>

        <div className={style.ul_footer}>
          <p>Enlaces</p>
          <ul>
            <li><a href="#home">Inicio</a></li>
            <li><a href="#about">Sobre SPS</a></li>
            <li><a href="#products">Productos</a></li>
            <li><a href="#dgii">Exigencias DGII</a></li>
          </ul>
        </div>

        <div className={style.ul_footer}>
          <p>Soporte</p>
          <ul>
            <li><a href="#contact">Centro de Ayuda</a></li>
            <li><a href="#contact">Preguntas Frecuentes</a></li>
            <li><a href="#news">Documentación API</a></li>
          </ul>
        </div>

        <div className={style.ul_footer}>
          <p>Certificaciones</p>
          <div className={style.Certifications_Div}>
            <span>Certified PSFE</span>
            <span>AZURE CLOUD</span>
          </div>
        </div>
      </div>

      <div className={style.Section_Footer}>
        <span>
          &copy; 2026 Software Professional Services (SPS). All Rights Reserved
        </span>
      </div>
    </footer>
  );
}

export default Footer;
