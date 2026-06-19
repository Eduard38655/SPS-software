import style from "../styles/Footer.module.css";
function Footer(params) {
  return (
    <>
      <footer className={style.Container_Footer}>

        <div className={style.Container_Content_Footer}>
          <div className={style.title_Footer}>
            <label htmlFor="">SPS Software</label>
            <p>
              Innovacoin en softwre empresarial y soluciones para el mercado
              dominicano.
            </p>

            <div>
              <span>
                <i className="fa-brands fa-linkedin-in"></i>
              </span>

              <span>
                <i className="fa-brands fa-facebook-f"></i>
              </span>

              <span>
                <i className="fa-brands fa-youtube"></i>
              </span>
            </div>
          </div>

          <div className={style.ul_footer}>
            <label htmlFor="">Enlaces</label>
            <ul>
              <li><a href="#home">Inicio</a></li>
              <li><a href="#about">Sobre SPS</a></li>
              <li><a href="#products">Productos</a></li>
              <li><a href="#dgii">Exigencias DGII</a></li>
            </ul>
          </div>

          <div className={style.ul_footer}>
            <label htmlFor="">Soporte</label>
            <ul>
              <li>
                <a href="#contact">Centro de Ayuda </a>
              </li>
              <li>
                <a href="#contact">Preguntas Frecuentes</a>
              </li>

              <li>
                <a href="#news">Documentacion API</a>
              </li>
            </ul>
          </div>

          <div className={style.ul_footer}>
            <label htmlFor="">Certificaciones</label>

            <div className={style.Certifications_Div}>
              <span>Certified PSFE</span>
              <span>AZURE CLOUD</span>
            </div>
          </div>
        </div>

        <div className={style.Section_Footer}>
          <span>
            &copy; 2026 Software Professional Services (SPS). All Rights
            reserved.
          </span>
        </div>
      </footer>
    </>
  );
}

export default Footer;
