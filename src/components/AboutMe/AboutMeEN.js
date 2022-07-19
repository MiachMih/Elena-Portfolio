import React from "react";
import style from "./AboutMe.module.css";
import photo from "../../assets/photo_2.jpg";

function AboutMeEN() {
  function navigate() {
    window.open(
      "https://calendly.com/coach-emotionalintelligence/introduction-session",
      "_blank"
    );
  }

  return (
    <div className={style.container}>
      <div className={style.pos}>
        <div className={style.content}>
          <h2>Sign up for a free session</h2>
          <p>Free 30-minute session</p>
          <p>Strategic session, find what troubles you</p>
          <p>Make a plan to realize your dreams</p>
          <button className={style.btn} onClick={navigate}>
            Free Session
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

export default AboutMeEN;
