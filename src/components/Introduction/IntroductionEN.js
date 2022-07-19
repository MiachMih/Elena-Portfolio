import React from "react";
import style from "./Introduction.module.css";
import photo from "../../assets/photo_1.jpg";

function Introduction() {
  function navigate() {
    window.open(
      "https://calendly.com/coach-emotionalintelligence/introduction-session",
      "_blank"
    );
  }

  return (
    <div className={style.container}>
      <div className={style.content}>
        <p>Discover the Power of Coaching</p>
        <p>Hello! My name is Elena Shcherbakova.</p>
        <p>
          I am hired by leaders who are ready to take their performance and
          career to the next level. As an executive coach with a focus on
          leadership development, performance improvement and career
          development, I help my clients gain awareness and take action to be
          more effective AND fulfilled.
        </p>
        <button className={style.btn} onClick={navigate}>
          Let's begin
        </button>
        <footer>30 min introductory session - free</footer>
      </div>
      <div>
        <img src={photo} alt="Elena photo outside" className={style.photo} />
      </div>
    </div>
  );
}

export default Introduction;
