import React from "react";
import style from "./Pricing.module.css";
import Card from "./Card";

function Pricing() {
  return (
    <div id="pricing" className={style.container}>
      <h2>Цены</h2>
      <div className={style.preText}>
        <p>Сессия 40-60 минут</p>
        <p>Онлайн по zoom</p>
      </div>
      <div className={style.content}>
        <Card
          header={"Сессия-знакомство"}
          length={"30 минут"}
          content={`
          На этой встрече мы знакомимся друг с другом. 
          Я отвечаю на ваши вопросы. 
          Вы рассказываете о себе только то,
          что считаете необходимо для выявления вашей цели и ее достижения.
          `}
          price={"БЕСПЛАТНО"}
          link={"https://calendly.com/coach-emotionalintelligence/30min"}
        />
        <Card
          header={"Стратегическая встреча"}
          length={"40-60 минут"}
          content={`
          Когда есть срочный запрос, а сроки уже все прошли. Надо все разложить по полочкам быстро и эффективно
          `}
          price={"$300"}
          link={"https://calendly.com/coach-emotionalintelligence/60min"}
        />
        <Card
          header={"Пакет Минимальный"}
          length={"4 встречи по 20-40 минут"}
          content={`
          За это время сможете определить свои истинные ценности, определиться с важными задачами, составить долгосрочный план. найти ограничивающие установки, обрести мотивацию
          `}
          price={"$950"}
          link={"https://calendly.com/coach-emotionalintelligence/40"}
        />
        <Card
          header={"Пакет Оптимальный"}
          length={"10 встреч по 20-40 минут"}
          content={`
          Время, достаточное для выявления и нахождения пути решения глобальной задачи, разрушения стереотипов, трансформационных изменений
          `}
          price={"$1950"}
          link={"https://calendly.com/coach-emotionalintelligence/10"}
        />
      </div>
    </div>
  );
}

export default Pricing;
