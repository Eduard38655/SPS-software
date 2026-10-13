import { useState } from "react";
import NewsDetails from "../../DataDetails/NewsDetails.js";
import style from "../styles/NewsSection.module.css";
import ButtonViewMore from "./ButtonViewMore";

function NewsSection() {
  const [newsItems] = useState(NewsDetails);
  const [isOpen, setOpen] = useState(false);
  const [filterData, setFilterData] = useState(NewsDetails);

  const findNews = (title) => {
    setFilterData(newsItems.filter((item) => item.title === title));
    setOpen(true);
  };

  return (
    <section id="news">
      {isOpen && <ButtonViewMore FilterData={filterData} SetOpen={setOpen} />}
      <div className={style.NewsSection}>
        <div className={style.NewsSectionHeader}>
          <h2>Últimas Noticias</h2>
          <p>Actualizaciones sobre DUKE y el ecosistema fiscal de RD.</p>
        </div>

        <div className={style.NewsSectionBox}>
          {newsItems.map((item, index) => (
            <article key={index} className={style.NewsSectionCard}>
              <img src={item.img} alt={item.title} />
              <div className={style.NewsSectionContentCard}>
                <h5>{item.subtitle}</h5>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <button type="button" onClick={() => findNews(item.title)}>
                  Leer más
                  <i className="fa-solid fa-arrow-right-long" aria-hidden="true"></i>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default NewsSection;