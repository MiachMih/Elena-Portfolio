import React from "react";
import style from "./Card.module.css";

function CardEN(props) {
  const { header, length, content, price, link } = props;
  function navigate() {
    window.open(link, "_blank");
  }

  return (
    <div className={style.border}>
      <div className={style.card}>
        <h2>{header}</h2>
        <p>{length}</p>
        <p className={style.content}>{content}</p>
        <footer>{price}</footer>
        <button className={style.btn} onClick={navigate}>
          Schedule
        </button>
      </div>
    </div>
  );
}

export default CardEN;
