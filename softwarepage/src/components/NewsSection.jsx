import style from "../styles/Homepage.module.css";
import News1 from "../../public/News1.png";
import News2 from "../../public/News2.png";
import News3 from "../../public/News3.png";

function NewsSection(){
    return(
        <section>
            <div className={style.NewsSection}>
                <div className={style.NewsSectionHeader}>
                    <h2>Últimas Noticias</h2>
                    <p>Actualizaciones sobre DUKE y el ecosistema fiscal de RD.</p>
                </div>

                <div className={style.NewsSectionBox}>
               
                    <div className={style.NewsSectionCard}>
                        <img src={News1} alt="" />
                        <div className={style.NewsSectionContentCard}>
                            <h5>DGII NEWS</h5>
                            <h3>Nuevos plazos para la Facturación Electrónica</h3>
                            <p>Conoce el calendario actualizado de implementación para grandes contribuyentes...</p>
                            <a href="#">Leer más</a>
                        </div>
                    </div>

                    <div className={style.NewsSectionCard}>
                        <img src={News2} alt="" />
                        <div className={style.NewsSectionContentCard}>
                            <h5>TECH TIPS</h5>
                            <h3>Optimiza tu inventario con DUKE POS</h3>
                            <p>5 consejos prácticos para reducir mermas y mejorar el flujo de caja en tu negocio.</p>
                            <a href="#">Leer más</a>
                        </div>
                    </div>
                    
                    <div className={style.NewsSectionCard}>
                        <img src={News3} alt="" />
                        <div className={style.NewsSectionContentCard}>
                            <h5>SPS UPDATES</h5>
                            <h3>Integración nativa con Microsoft Azure</h3>
                            <p>Nuestra infraestructura ahora es más rápida y segura gracias a la nueva migración a la nube.</p>
                            <a href="#">Leer más</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default NewsSection;