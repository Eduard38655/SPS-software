import style from "../styles/Homepage.module.css";

function AboutUS() {
  return (
    <section className={style.homePage_Section} id="home" aria-label="Inicio de la página principal">
      <div className={style.homePage_Container}>
        <img
          src="/HomePageImg.jpeg"
          alt="Equipo de SPS Software revisando procesos de facturación electrónica"
        />

        <div className={style.homePage_Content}>
          <div className={style.homePage_Content_Container}>
            <div className={style.homePage_Content_Container_Header}>
              <span>Líder en Facturación electrónica</span>
            </div>

            <h2>
              Soluciones Tecnológicas para la gestión empresarial y facturación electrónica
            </h2>

            <p>
              Ayudamos a empresas de todos los tamaños a optimizar sus procesos
              mediante software confiable, seguro e innovador.
            </p>

            <div className={style.homePage_Content_Container_Button}>
              <a className={style.ctaLinkPrimary} href="#products">
                Conocer nuestros Productos
                <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
              </a>
              <a className={style.ctaLinkSecondary} href="#contact">
                Contáctanos
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUS;
