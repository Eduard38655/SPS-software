import { useEffect, useState } from "react";
import DataValues_Info from "../../DataDetails/DataValues.js";
import style from "../styles/OurValues.module.css";


function OurValuesSction2(params) {
  const [DataValues, SetValues_Info] = useState([]);

  useEffect(() => {
    SetValues_Info(DataValues_Info);
  }, []);
  return (
    <>
      <div className={style.OurValuesSction2_container}>
        <div className={style.OurValues_Subcontainer}>
          
          <div className={style.Div_Title}>
            <h3>Nuestros Valores</h3>
            <div className={style.line_values}></div>
          </div>

         <div className={style.Container_Cards}>

             {DataValues.map((data, index) => (
            <div key={index} className={style.Card}>
              <span><i className={data.icon}></i></span>
              <div>
                <h4>{data.title}</h4>
                <p>{data.description}</p>
              </div>
            </div>
          ))}
         </div>
        </div>
      </div>
    </>
  );
}

export default OurValuesSction2;
