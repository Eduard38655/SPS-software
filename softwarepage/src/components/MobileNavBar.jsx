
import { useState } from "react";
import style from "../styles/NavigationBar.module.css";

function MobileNavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setActive] = useState("home");
  const routes = [
    { route: "home", name: "Inicio" },
    { route: "about", name: "Sobre SPS" },
    { route: "products", name: "Productos" },
    { route: "dgii", name: "Exigencias DGII" },
    { route: "news", name: "Noticias" },
    { route: "contact", name: "Contacto" },
  ];

  return (
    <nav className={style.mobileNavBar} aria-label="Navegación móvil">
      <div className={style.navBar_Mobile}>
        <div className={style.logoContainer}>
          <span className={style.logo}>
            <img src="/Icono_Sps.png" alt="Logo de SPS Software" />
            <h1>SPS</h1>
          </span>

          {isOpen ? (
            <button
              type="button"
              aria-label="Cerrar menú"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              <i className="fa-solid fa-xmark" aria-hidden="true"></i>
            </button>
          ) : (
            <button
              type="button"
              aria-label="Abrir menú"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              <i className="fa-solid fa-bars" aria-hidden="true"></i>
            </button>
          )}
        </div>
      </div>

      {isOpen && (
        <div className={style.menuDiv_Details}>
          <ul>
            {routes.map((exp, index) => (
              <li
                key={index}
                className={exp.route === isActive ? style.ActiveRoute : style.InactiveRoute}
                onClick={() => setActive(exp.route)}
              >
                <a href={`#${exp.route}`}>{exp.name}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default MobileNavBar;