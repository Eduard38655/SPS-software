import Icono_Sps from "../../public/Icono_Sps.png";
import style from "../styles/NavigationBar.module.css";
import { useState,useEffect } from "react";

function NavigationBar() {  
const [isActive,SetActive]=useState("home")
 

const Routes=[
    {route:"home",name:"Inicio"},
    {route:"about",name:"Sobre SPS"},
    {route:"products",name:"Productos"},
    {route:"dgii",name:"Exigencias DGII"},
    {route:"news",name:"Noticias"},
    {route:"contact",name:"Contacto"}
] 
    return (
    <nav className={style.navBarContainer}>
        <div className={style.navBar}>
            <span className={style.logo}>
                <img src={Icono_Sps} alt="logo" />
                <h1>Software Professional Services</h1>
            </span>
            <div className={style.menu}>
                <ul >
                {Routes.map((exp,index)=>(

                   
                     <li key={index}  className={exp.route==isActive ? style.ActiveRoute : style.InactiveRoute }  onClick={(e)=>{SetActive(exp.route)}}   >
                        <a   href={`#${exp.route}`}>{exp.name}</a>
                    </li>
                   
                    
                ))}
                  </ul>
            </div>
        </div>
    </nav>
      
    )
}

export default NavigationBar
