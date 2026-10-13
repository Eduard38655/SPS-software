import style from "../styles/NewsSection.module.css";

function ButtonViewMore({ FilterData, SetOpen }) {
  return (
    <div className={style.Selected_SectionBox}>
      <div className={style.Selected_SectionBox__content}>
        {FilterData.map((item, index) => (
          <div className={style.NewsSeletedCard} key={index}>
            <img src={item.other_img} alt={item.title} />
            <div className={style.NewsSelectedContentCard}>
              <h5>{item.subtitle}</h5>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
            <div className={style.Selected_SectionBox__content__footer}>
              <p>Publicado por Equipo Editorial SPS</p>
              <button type="button" aria-label="Cerrar noticia" onClick={() => SetOpen((prev) => !prev)}>
                Cerrar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ButtonViewMore;