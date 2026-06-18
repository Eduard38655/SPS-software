import style from "../styles/OurValues.module.css";

function OurValues(params) {
  return (
    <>
      <div className={style.ourValues_container} id="about">

        
        <div className={style.ourValues_container__content}>
          <div className={style.ourValues_container__text}>
            <h3>Quienes Somos</h3>
            <p>
              Softwares Professional Services (SPS) es una empresa comprometida
              con la excelencia en el desarrollo de software. Nos especializamos
              en crear ecosistemas digitales que permiten a las empresas
              dominicanas cumplir con las normativas locales mientras maximizan
              su eficiencia operativa.
            </p>
          </div>

          <div className={style.ourValues_container__values}>
            <div className={style.ourValues_container__values__card}>
              <i className="fa-solid fa-rocket"></i>

              <div>
                <span>Misión</span>
                <p>
                  Impulsar el crecimiento de nuestros clientes mediante
                  tecnología de vanguardia.
                </p>
              </div>
            </div>

            <div className={style.ourValues_container__values__card}>
              <i className="fa-solid fa-eye"></i>
              <div>
                <span>Visión</span>
                <p>
                  Ser el socio tecnológico referente en el Caribe para
                  soluciones de facturación e-NCF.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurValues;
