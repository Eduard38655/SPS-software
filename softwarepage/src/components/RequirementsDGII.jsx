import style from "../styles/Homepage.module.css";

function RequirementsDGII() {
    return (
        <section className={style.requirementsSection}>

            <div className={style.requirementsContainer}>

                <div className={style.requirementsHeader}>
                    <h2>Proveedores de Servicios de Facturación Electrónica (PSFE)</h2>
                    <p>SPS cumple rigurosamente con todos los requerimientos técnicos y legales 
                        exigidos por la DGII. Facilitamos el proceso de homologación para que su empresa 
                        pueda emitir comprobantes electrónicos sin fricciones.</p>
                </div>

                <div className={style.requirementsList}>
                    <div className={style.icon}>
                        <i className="fa-solid fa-shield-halved"></i>
                    </div>
                    <div className={style.requirementsListContent}>
                        <h3>Cumplimiento Normativo</h3>
                        <ul>
                            <li>Alineados 100% con la Ley 32-23 de Facturación Electrónica.</li>
                        </ul>
                    </div>
                </div>

                <div className={style.requirementsList}>
                    <div className={style.icon}>
                        <i className="fa-solid fa-arrow-right-arrow-left"></i>
                    </div>
                    <div className={style.requirementsListContent}>
                        <h3>Homologación Asistida</h3>
                        <ul>
                            <li>Acompañamos a su equipo en cada fase de prueba ante la DGII.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className={style.requirementsBox}>
                <div className={style.cardBlue}>
                    <i className="fa-solid fa-shield-halved"></i>
                    <h4>Encriptación AES-256</h4>
                </div>
                <div className={style.cardRed}>
                    <i className="fa-solid fa-cloud"></i>
                    <h4>Respaldo en la Nube</h4>
                </div>
            </div>
        </section>
    );
}

export default RequirementsDGII;