import React from "react";
import style from "./AboutMe.module.css";
import photo from "../../assets/photo_2.jpg";

function AboutMe() {
  function navigate() {
    window.open(
      "https://calendly.com/coach-emotionalintelligence/30min",
      "_blank"
    );
  }

  return (
    <div className={style.container}>
      <div className={style.pos}>
        <div className={style.content}>
          <h2>Запишись на бесплатную сессию</h2>
          <p>Бесплатная 30-минутная сессия</p>
          <p>Стратегическая сессия, найди что тебя тревожит</p>
          <p>Составь план по реализации идей</p>
          <button className={style.btn} onClick={navigate}>
            Бесплатная сессия
          </button>
        </div>
        <img
          src={photo}
          alt="Elena inviting you to a session"
          className={style.photo}
        />
      </div>
    </div>
  );
}

export default AboutMe;
