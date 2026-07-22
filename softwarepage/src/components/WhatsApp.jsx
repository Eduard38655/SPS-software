import style from "../styles/WhatsApp.module.css";

function WhatsApp(params) {
    
    return(<>
    
    <div className={style.container_Whatsapp}>
        <div>

            <button onClick={() =>
    window.open(
      "https://wa.me/18099234056?text=Hola%20quiero%20información",
      "_blank"
    )
  }>
                <i className="fa-brands fa-whatsapp"></i>
            </button>
        </div>
    </div>
    
    </>)
}

export default WhatsApp