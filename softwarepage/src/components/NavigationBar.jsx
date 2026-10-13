import style from "../styles/NavigationBar.module.css";
import { useState } from "react";

function NavigationBar() {
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
    <nav className={style.navBarContainer} aria-label="Navegación principal">
      <div className={style.navBar}>
        <span className={style.logo}>
          <img src="/Icono_Sps.png" alt="Logo de SPS Software" />
          <h1>Software Professional Services</h1>
        </span>
        <div className={style.menu}>
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
      </div>
    </nav>
  );
}

export default NavigationBar;
