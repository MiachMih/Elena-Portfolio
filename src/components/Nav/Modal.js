import React from "react";
import style from "./Modal.module.css";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

function Modal(props) {
  const { toggleModal } = props;
  return (
    <div className={style.container}>
      <div className={style.content}>
        <button className={style.btn} onClick={toggleModal}>
          ВЕРНУТЬСЯ
        </button>
        <ul>
          <li>
            <a href="#" onClick={toggleModal}>
              Обо мне
            </a>
          </li>
          <li>
            <a href="#mission" onClick={toggleModal}>
              Миссия
            </a>
          </li>
          <li>
            <a href="#certificate" onClick={toggleModal}>
              Сертификаты
            </a>
          </li>
          <li>
            <a href="#pricing" onClick={toggleModal}>
              Цены
            </a>
          </li>
          <li>
            <a href="#review" onClick={toggleModal}>
              Отзывы
            </a>
          </li>
          {/* <li>
            <a href="#photo">Photos</a>
          </li> */}
          <li>
            <a href="#faq" onClick={toggleModal}>
              FAQ
            </a>
          </li>
          <li>
            <a href="#message" onClick={toggleModal}>
              Связаться со мной
            </a>
          </li>
        </ul>

        <div className={style["icons-container"]}>
          <a
            href="https://www.linkedin.com/in/eleena-shcherbakova/"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin className={style.icons} />
          </a>
          <a
            href="https://www.instagram.com/stories/highlights/17904546808660910/"
            target="_blank"
            rel="noreferrer"
          >
            <BsInstagram className={style.icons} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Modal;
