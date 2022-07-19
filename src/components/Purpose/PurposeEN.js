import React from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import style from "./Purpose.module.css";

function PurposeEN() {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <h2>What is Coaching?</h2>
        <p>
          Coaching is the key to mindfulness. And mindfulness helps us better
          manage yourself.
        </p>

        <p>
          It is a partnership, a cooperation on a professional level. The goal
          of which is to reach set goals. To achieve important in profeesional
          and personal lives.
        </p>
        <p>
          Of everything that surrounds us, it is we ourselves who are in control
          and can influence changes in our lives.
        </p>
        <p>
          It is important to see the connections between our thoughts, emotions,
          feelings and actions. Together they form a single system, and any
          system can be changed by changing one of its elements. Coaching helps
          you find these relationships, understand the reasons behind them, and,
          most importantly, find opportunities for change in order to become
          happier and more successful, both professionally and personally.
        </p>
        {/* <div className={style.video}>
          <a href="">Посмотреть Видео</a>
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

export default PurposeEN;
