import { useState } from "react";
import NewsDetails from "../../DataDetails/NewsDetails.js";
import style from "../styles/NewsSection.module.css";
import ButtonViewMore from "./ButtonViewMore";
function NewsSection() {
    const [GetNewInfo, SetNewInfo] = useState(NewsDetails)
    const [isOpen, SetOpen] = useState(false)
    const [FilterData, SetFilterData] = useState(NewsDetails)

    const FindNews = (title) => {
        console.log(title);
        SetFilterData(GetNewInfo.filter((item) => item.title === title))
        SetOpen(true)
        
    }
 
    return (
        <section id="news">
            {isOpen && <ButtonViewMore FilterData={FilterData} SetOpen={SetOpen}/>}
            <div className={style.NewsSection}>
                <div className={style.NewsSectionHeader}>
                    <h2>Últimas Noticias</h2>
                    <p>Actualizaciones sobre DUKE y el ecosistema fiscal de RD.</p>
                </div>

                <div className={style.NewsSectionBox}>
                    {GetNewInfo.map((item,index) => (
                        <div key={index} className={style.NewsSectionCard}>
                            <img src={item.img} alt="" />
                            <div className={style.NewsSectionContentCard}>
                                <h5>{item.subtitle}</h5>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                                <button onClick={() => {FindNews(item.title)}} >
                                    Leer más
                                 {" "}   <i className="fa-solid fa-arrow-right-long"></i>
                                </button>

                            </div>
                        </div>
                    ))}


                </div>
            </div>
        </section>
    )
}
export default NewsSection;