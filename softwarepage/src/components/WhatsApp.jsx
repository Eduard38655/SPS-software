import style from "../styles/WhatsApp.module.css";

function WhatsApp(params) {
    
    return(<>
    
    <div className={style.container_Whatsapp}>
        <div>

            <button>
                <i className="fa-brands fa-whatsapp"></i>
            </button>
        </div>
    </div>
    
    </>)
}

export default WhatsApp