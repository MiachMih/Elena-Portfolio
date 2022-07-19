import React from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import style from "./Mission.module.css";
import photo1 from "../../assets/photo_3.jpg";
import photo2 from "../../assets/photo_4.jpg";

function Mission() {
  function navigate() {
    window.open(
      "https://calendly.com/coach-emotionalintelligence/30min",
      "_blank"
    );
  }

  return (
    <div id="mission" className={style.container}>
      <div className={style.photos}>
        <img
          className={style.photo1}
          src={photo1}
          alt="Sitting on the stairs"
        />
        <img
          className={style.photo2}
          src={photo2}
          alt="Sitting by the window with coffee"
        />
      </div>
      <div className={style.content}>
        <h3>Обо мне</h3>
        <div className={style.text}>
          <p>Привет! Меня зовут Елена</p>
          <p>Мой родной город Москва, Россия</p>
          <p>
            Получила 2 высших образования: психолог и искусствовед в московском
            университете, но ни дня не работала по специальностям
          </p>
          <p>Иммигрировала с семьей в США в 2013 году.</p>
          <p>
            С 2015 года руковожу медицинской компанией, внедряя технологии
            коучинга и развивая эмоциональный интеллект, для продвижения бизнес
            сервисов. С уверенностью могу сказать, что это работает! Бенефиты
            получают все: сотрудники чувствуют себя надежно и спокойно, бизнес
            увеличивает свою прибыль.
          </p>
          <p>
            Меня всегда вдохновляет успех других людей и это вселяет уверенность
            в том, что я делаю. У моих клиентов нет шансов провалиться, они
            всегда приходят к результату. Главное двигаться вперед. И лучше
            получить волшебный пендель в сессии, чем от жизни.
          </p>
          <button className={style.btn} onClick={navigate}>
            Записаться
          </button>
        </div>
        <h3>Чем я могу вам помочь</h3>
        <ul>
          <li>Альтернативный взгляд на свою ситуацию и ее развитие</li>
          <li>
            Возвращают способность не только мечтать, но и воплощать мечты в
            жизнь
          </li>
          <li>Находят опоры в кризисе и понимают чем жить дальше</li>
          <li>Приобретают мотивацию и вдохновения для дальнейших шагов</li>
          <li>Ломают финансовые барьеры, зарабатывают больше, чем мечтали</li>
          <li>Проясняют бизнес-стратегию развития, приоритетность</li>
          <li>План личностного развития от менеджера до топа</li>
          <li>Сбалансированная жизнь между работой и личной жизнью</li>
        </ul>
        {/* <div className={style.video}>
          <a href="">Моя миссия и философия</a>
          <div className={style.icon}>
            <a href="">
              <AiFillPlayCircle />
            </a>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Mission;
