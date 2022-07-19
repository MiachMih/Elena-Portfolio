import React, { useRef } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "emailjs-com";
import style from "./MessageMe.module.css";

function MessageMe() {
  const form = useRef();
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(
      "service_mx9l8cb",
      "template_xs1x5hf",
      form.current,
      "kdfJVk0qoNE6CfdHD"
    );
    e.target.reset();
  }

  return (
    <div id="message" className={style.all}>
      <h2>Написать Мне</h2>
      <div className={style.container}>
        <div className={style.options}>
          <article className={style.option}>
            <AiOutlineMail className={style.icon} />
            <h4>Емейл</h4>
            <h5 className={style.selectable}>
              coach.emotionalintelligence@gmail.com{" "}
            </h5>
            <a
              href="mailto:coach.emotionalintelligence@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Отправить Сообщение
            </a>
          </article>
          <article className={style.option}>
            <BsInstagram className={style.icon} />
            <h4>Instagram</h4>
            <h5>Елена</h5>
            <a
              href="https://www.instagram.com/stories/highlights/17904546808660910/"
              target="_blank"
              rel="noreferrer"
            >
              Отправить Сообщение
            </a>
          </article>
          {/* <article className={style.option}>
            <BsWhatsapp className={style.icon} />
            <h4>Whatsapp</h4>
            <h5 className={style.selectable}>+1 (857) 221-2583</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+18572212583"
              target="_blank"
              rel="noreferrer"
            >
              Отправить Сообщение
            </a>
          </article> */}
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Полное имя" required />
          <input type="email" name="email" placeholder="Емейл" required />
          <textarea name="message" rows="7" placeholder="Сообщение" required />
          <button type="submit" className="btn btn-primary">
            Отправить Сообщение
          </button>
        </form>
      </div>
    </div>
  );
}

export default MessageMe;
