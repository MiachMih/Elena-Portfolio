import React from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import style from "./Mission.module.css";
import photo1 from "../../assets/photo_3.jpg";
import photo2 from "../../assets/photo_4.jpg";

function MissionEN() {
  function navigate() {
    window.open(
      "https://calendly.com/coach-emotionalintelligence/introduction-session",
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
        <h3>About Me</h3>
        <div className={style.text}>
          <p>Hi! My name is Elena.</p>
          <p>I was born in Moscow, Russia.</p>
          <p>
            Received 2 bachelor's degrees in Psychology and Art at Moscow
            University.
          </p>
          <p>Immigrated to the US in 2013</p>
          <p>
            Became a senior manager of a medical business in 2015. I utilize my
            coaching skills at work with business partners to achieve company
            goals. Provide operations and compliance training to the
            administrative staff along with career coaching and Emotional
            Intelligence training.
          </p>
          <p>
            I am always inspired by my clients' success. It gives me more
            confidence in what I do. My clients have no chance of failure, they
            always attain results. The main thing is to move forward. It's
            better to get a magic kick in a session than from life!
          </p>
          <button className={style.btn} onClick={navigate}>
            Get Started
          </button>
        </div>
        <h3>HOW WILL YOU BENEFIT? Through coaching you will gain:</h3>
        <ul>
          <li>Confidence that you will succeed</li>
          <li>
            Power and determination to take the path that would create the most
            joy and success…as they define it…and ability to be present
          </li>
          <li>
            A detailed plan of milestones and steps to speed up their career
          </li>
          <li>
            Confirmation that the chosen path is truly theirs and serves their
            best interests
          </li>
          <li>
            Courage to keep going and resilience to press through failures
          </li>
          <li>
            Understanding and leveraging your strengths and success strategies
          </li>
          <li>We don't just succeed. We thrive!</li>
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

export default MissionEN;
