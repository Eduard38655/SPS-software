import HomePageImg from "../../public/HomePageImg.jpeg";
import style from "../styles/Homepage.module.css";
function AboutUS() {
  return (
    <>
      <section className={style.homePage_Section} id="home">

        <div className={style.homePage_Container}>
          <img src={HomePageImg} alt="Home Page" />


          <div className={style.homePage_Content}>

            <div className={style.homePage_Content_Container}>

              <div className={style.homePage_Content_Container_Header}>
                <span>Líder en Facturación electrónica   </span>
              </div>

              <h2>
                Soluciones Tecnológicas para la gestión empresarial y facturación electrónica{" "}
              </h2>

              <p>
                Ayudamos a empresas de todos los tamaños a optimizar sus procesos
                mediante software confiable, seguro e innovador
              </p>


              <div className={style.homePage_Content_Container_Button}>
                <button>
                  <a href="#products">
                    Conocer nuestros Productos{" "}
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </button>
                <button>
                  <a href="#contact">Contáctanos </a>
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}

export default AboutUS;
