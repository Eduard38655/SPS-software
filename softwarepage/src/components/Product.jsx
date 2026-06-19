import SupportSection from "../components/SubSectionSoft";
import style from "../styles/SoftDuke.module.css";
function Products(params) {
  return (
    <>
      <div className={style.Container_Soft_Section} id="products">
        <div className={style.Container_Duke_Details}>

          <div className={style.SoftSection_Header}>
            <div className={style.Soft_header_Title}>
              <h3>Software DUKE </h3>
              <p>
                Nuestra suite empresarial modular diseñada para el mercado
                Dominicano
              </p>
            </div>
            <div className={style.Div_SectionCloud}>
              <span>CLOUD READY</span>
              <span>NCF COMPLIANT</span>
            </div>
          </div>

          <div className={style.SoftDuke_Content}>
            <div className={style.Card}>
              <div className={style.Icons_Section_Card}>
                <span>
                  <i className="fa-solid fa-box-archive"></i>
                </span>
              </div>
              <div className={style.Card_Content_Details}>
                <h4>Sistemas Integrales</h4>

                <ul>
                  <li>
                    <i className="fa-regular fa-circle-check"></i> {" "}Controll de
                    inventario
                  </li>

                  <li>
                    <i className="fa-regular fa-circle-check"></i> {" "}Nomina y
                    Contabilidad
                  </li>

                  <li>
                    <i className="fa-regular fa-circle-check"></i> {" "}Cuentas por
                    Cobrar/Pagar
                  </li>

                  <li>
                    <i className="fa-regular fa-circle-check"></i>{" "} Caja Chica y
                    Banco
                  </li>
                </ul>
              </div>
            </div>

            <div className={style.MainCard}>

              <div className={style.Div_Icon}>
                <span className={style.sect_Icon}>
                  <i className="fa-solid fa-receipt"></i>
                </span>
              </div>

              
              <div className={style.mainCard_Info}>
                <h4>Facturacoin Electronica </h4>
                <p>
                  Implementacion completa para emissoin y reception de e-NCF
                  bajo los estandares de la DGII.
                </p>

                <div className={style.Facturacion_Div}>
                  <span>Certificado Digital </span>
                  <span>Firma Electronica </span>
                </div>
              </div>
            </div>

            <div className={style.Card}>
              <div className={style.Icons_Section_Card}>
                <span>
                  <i className="fa-solid fa-cash-register"></i>
                </span>
              </div>
              <div className={style.Card_Content_Details}>
                <h4>Puntos de ventas(POS)</h4>
                <ul>
                  <li>
                    <i className="fa-regular fa-circle-check"></i> {" "}Ventas
                    Rapidas y Agiles
                  </li>

                  <li>
                    <i className="fa-regular fa-circle-check"></i>{" "}
                    Sincronizacion en tiempo real
                  </li>

                  <li>
                    <i className="fa-regular fa-circle-check"></i> {" "}Reportes de
                    cierre de caja
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <SupportSection />
      </div>
    </>
  );
}

export default Products;
