import React from "react";
// import { NavLink } from "react-router-dom";
import style from "./Introduction.module.css";
import photo from "../../assets/photo_1.jpg";

function Introduction() {
  function navigate() {
    window.open(
      "https://calendly.com/coach-emotionalintelligence/30min",
      "_blank"
    );
  }

  return (
    <div className={style.container}>
      <div className={style.content}>
        <p>Прочувствуй Силу Коучинга</p>
        <p>
          Меня зовут Елена Щербакова - я лицензированный лайф и бизнес коуч ICF
        </p>
        <p>
          Я искренне верю, что у каждого человека есть все ресурсы, чтобы решить
          любой вопрос, достичь цели и осуществить мечты. Как коуч я помогаю
          найти ответы на вопросы, сделать выбор и достичь любых реальных целей
          как в бизнесе, так и в личной жизни.
        </p>
        {/* <p>
          adipisci dolor nostrum.{" "}
          {
            // <NavLink className={style.prim} to="/myhistory">
            //   Let's get to know each other!
            // </NavLink>
          }
        </p> */}
        <button className={style.btn} onClick={navigate}>
          Назначить Сессию
        </button>
        <footer>30 минут ознакомительная сессия - бесплатно</footer>
      </div>
      <div>
        <img src={photo} alt="Elena photo outside" className={style.photo} />
      </div>
    </div>
  );
}

export default Introduction;
