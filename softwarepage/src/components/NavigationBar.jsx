import Icono_Sps from "../../public/Icono_Sps.png";
import style from "../styles/NavigationBar.module.css";


function NavigationBar() {  
    return (
    <nav className={style.navBarContainer}>
        <div className={style.navBar}>
            <span className={style.logo}>
                <img src={Icono_Sps} alt="logo" />
                <h1>Software Professional Services</h1>
            </span>
            <div className={style.menu}>
                <ul>
                    <li><a href="#home">Inicio</a></li>
                    <li><a href="#about">Sobre SPS</a></li>
                    <li><a href="#products">Productos</a></li>
                    <li><a href="#dgii">Exigencias DGII</a></li>
                    <li><a href="#news">Noticias</a></li>   
                    <li><a href="#contact">Contacto</a></li>
                </ul>
            </div>
        </div>
    </nav>
      
    )
}

export default NavigationBar
