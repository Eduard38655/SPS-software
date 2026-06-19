import { useEffect } from "react";
import style from "../styles/NewsSection.module.css";
//.NewsSectionContentCard
function ButtonViewMore({ FilterData, SetOpen }) {
    useEffect(() => {
        console.log(FilterData, "FilterData");
    }, [FilterData])

    return (<>
        <div className={style.Selected_SectionBox}>
            <div className={style.Selected_SectionBox__content}>

                {FilterData.map((item, index) => (
                    <div className={style.NewsSeletedCard} key={index}>
                        <img src={item.other_img} alt="" />
                        <div className={style.NewsSelectedContentCard}>
                            <h5>{item.subtitle}</h5>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>


                        </div>
                        <div className={style.Selected_SectionBox__content__footer}>
                            <p>Publicado por Equipo Editorial SPS</p>
                            <button onClick={() => SetOpen((prev) => !prev)}>
                                Cerrar
                            </button>
                        </div>
                    </div>

                ))}

            </div>


        </div>
    </>)
}


export default ButtonViewMore