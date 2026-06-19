
import { useState } from "react";
import Icono_Sps from "../../public/Icono_Sps.png";
import style from "../styles/NavigationBar.module.css";

function MobileNavBar(params) {
    const [isOpen, setIsOpen] = useState(false);



    return (<>

        <nav className={style.mobileNavBar}>

            <div className={style.navBar_Mobile}>

                <div className={style.logoContainer}>

                    <span className={style.logo}>
                        <img src={Icono_Sps} alt="logo" />
                        <h1>SPS</h1>
                    </span>



                    {isOpen ?
                        <>
                            <button onClick={() => setIsOpen((prev) => !prev)}>
                                <i className="fa-solid fa-x" ></i>
                            </button>
                        </> :
                        <button onClick={() => setIsOpen((prev) => !prev)}>
                            <i className="fa-solid fa-bars" ></i>
                        </button>
                    }

                </div>


            </div>
            {isOpen && <div className={style.menuDiv_Details}>
                <ul>
                    <li><a href="#home">Inicio</a></li>
                    <li><a href="#about">Sobre SPS</a></li>
                    <li><a href="#products">Productos</a></li>
                    <li><a href="#dgii">Exigencias DGII</a></li>
                    <li><a href="#news">Noticias</a></li>
                    <li><a href="#contact">Contacto</a></li>
                </ul>
            </div>}
        </nav>
    </>)
}

export default MobileNavBar;