import HomePageImg from "../../public/HomePageImg.jpeg";
import style from "../styles/Homepage.module.css";
function AboutUS(params) {
  return (
    <>
    <section className={style.homePage_Section}>
        
    <div className={style.homePage_Container}>
          <img src={HomePageImg} alt="Home Page" />

     
     <div className={style.homePage_Content}>
        
         <div className={style.homePage_Content_Container}>

        <div className={style.homePage_Content_Container_Header}>
          <span>Lider en Facturacion elecctronica </span>
        </div>

        <h2>
          Solucinoes Tecnologicas para la gestions Empresarial y facturacion
          Electronica{" "}
        </h2>

        <p>
          Ayudamos a empresas de todos los tamanos a optimisart sus procesoss
          mediamte software confiable , seguro e innovador
        </p>
       

      <div className={style.homePage_Content_Container_Button}>
        <button>
          <a href="#">
            Conocer nuestros Productos{" "}
            <i className="fa-solid fa-arrow-right"></i>
          </a>
        </button>
        <button>
          <a href="#">contactar Ahora </a>
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
