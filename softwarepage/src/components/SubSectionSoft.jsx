import style from "../styles/SoftDuke.module.css";

function SubSectionSoft(params) {
  return (
    <>
      <div className={style.Contaiuner_Support}>
        <div className={style.SubContaiuner_Support}>
          
          <div className={style.Card_support}>
            <i className="fa-solid fa-code"></i>
            <div>
              <h4>Custom Software</h4>
              <p>Desarrollos a la medida de su flujo.</p>
            </div>
          </div>

          <div className={style.Card_support}>
            <i className="fa-solid fa-headset"></i>
            <div>
              <h4>Soporte Tecnico</h4>
              <p>24/7 para procesos críticos.</p>
            </div>
          </div>

         

          <div className={style.Card_support}>
            <i className="fa-solid fa-cloud"></i>
            <div>
              <h4>Cloud Computing</h4>
              <p>Infraestructura escalable en Azure.</p>
            </div>
          </div>

          <div className={style.Card_support}>
            <i className="fa-solid fa-lock"></i>
            <div>
              <h4>Ciberseguridad</h4>
              <p>Encriptación de nivel bancario.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SubSectionSoft;
