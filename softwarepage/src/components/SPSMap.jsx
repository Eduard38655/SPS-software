import Map from "../components/Map";
import style from "../styles/Location.module.css";
function SPSMap(params) {
  return (
    <>
      <div className={style.Container_Map_Location}>
        <div className={style.SubContainer_Info}>

          <div className={style.Container_Title_Map}>
            <h4>Vias de Asistencia e Informacion </h4>
            <p>
              Estamos comprometidos con brindarte el mejor servicio. Aqui
              encontrara todos nuestros cabnales officiales de contacto y
              horarios de atecion{" "}
            </p>
          </div>

          <div className={style.Container_Personal_Info}>
            <div className={style.Card_Map}>
              <i className="fa-regular fa-clock"></i>
              <div>
                <label htmlFor="">Horario de asistencia </label>
                <p>Lun. a Vie. 8:00 am a 5:00 p.m </p>
                <p>Sabados.8:00 a.m a 12:00p.m </p>
              </div>
            </div>
            <div className={style.Card_Map}>
              <i
                className="fa-solid fa-asterisk"
                style={{ color: "rgb(226, 56, 52)" }}
              ></i>
              <div>
                <label htmlFor="">Emergencia</label>
                <p>Ing. Lenin Martinez </p>
                <p>809-856-2092</p>
              </div>
            </div>
            <div className={style.Card_Map}>
              <i className="fa-solid fa-location-dot"></i>
              <div>
                <label htmlFor="">Ubicacion </label>
                <p>Santiago, Rep. Dom.</p>
              </div>
            </div>
            <div className={style.Card_Map}>
              <i className="fa-solid fa-phone"></i>
              <div>
                <label htmlFor="">Asistencia Administrativa </label>
                <p>809-736-7788 </p>
              </div>
            </div>

            <div className={style.Card_Map}>
              <i className="fa-solid fa-envelope"></i>
              <div>
                <label htmlFor="">Correos Electronicos </label>
                <p>spsfinanzas@hotmail.com</p>
                <p>sps_sistemas@hotmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <Map />
      </div>
    </>
  );
}

export default SPSMap;
