import style from "../styles/Homepage.module.css";

function NavigationBar() {
    return (
    <nav>
        <div className={style.navBar}>
            <span className={style.logo}>
                <img src="" alt="logo" />
                <p>SPS</p>
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
