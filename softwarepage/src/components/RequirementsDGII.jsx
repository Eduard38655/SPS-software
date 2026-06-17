import style from "../styles/Homepage.module.css";

function RequirementsDGII() {
    return (
        <section className={style.requirementsSection}>
            <div className={style.requirementsContainer}>
                <h2>Proveedores de Servicios de Facturación Electrónica (PSFE)</h2>
                <p>SPS cumple rigurosamente con todos los requerimientos técnicos y legales exigidos por la DGII. Facilitamos el proceso de homologación para que su empresa pueda emitir comprobantes electrónicos sin fricciones.</p>
                <div className={style.requirementsList}>
                    <h3>Requisitos para PSFE:</h3>
                    <p>- Cumplimiento de estándares técnicos establecidos por la DGII.</p>
                    <h3>Requisitos para la Homologación:</h3>
                    <p>- Capacidad de integración con sistemas contables y ERP.</p>
                </div>
            </div>
        </section>
    );
}