import style from "../styles/WhatsApp.module.css";

function WhatsApp() {
  return (
    <div className={style.container_Whatsapp}>
      <div>
        <button
          type="button"
          aria-label="Contactar por WhatsApp"
          onClick={() =>
            window.open(
              "https://wa.me/18099234056?text=Hola%20quiero%20información",
              "_blank",
              "noopener,noreferrer"
            )
          }
        >
          <i className="fa-brands fa-whatsapp" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
}

export default WhatsApp;