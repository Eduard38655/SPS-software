
import { useState } from "react";
import Icono_Sps from "../../public/Icono_Sps.png";
import style from "../styles/NavigationBar.module.css";

function MobileNavBar(params) {
    const [isOpen, setIsOpen] = useState(false);
const [isActive,SetActive]=useState("home")
const Routes=[
    {route:"home",name:"Inicio"},
    {route:"about",name:"Sobre SPS"},
    {route:"products",name:"Productos"},
    {route:"dgii",name:"Exigencias DGII"},
    {route:"news",name:"Noticias"},
    {route:"contact",name:"Contacto"}
] 

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
                              <i className="fa-solid fa-xmark"></i>
                            </button>
                        </> :
                        <button onClick={() => setIsOpen((prev) => !prev)}>
                            <i className="fa-solid fa-bars" ></i>
                        </button>
                    }

                </div>


            </div>
            {isOpen && <div className={style.menuDiv_Details}>
               <ul >
                              {Routes.map((exp,index)=>(
                                   <li key={index}  className={exp.route==isActive ? style.ActiveRoute : style.InactiveRoute }  onClick={(e)=>{SetActive(exp.route)}}   >
                                      <a   href={`#${exp.route}`}>{exp.name}</a>
                                  </li>
                                 ))}
                </ul>
            </div>}
        </nav>
    </>)
}

export default MobileNavBar;