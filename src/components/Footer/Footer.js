import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import style from "./Footer.module.css";

function Footer() {
  return (
    <div className={style.container}>
      <ul className={style["list-links"]}>
        <li>
          <a href="#">Обо мне</a>
        </li>
        <li>
          <a href="#mission">Миссия</a>
        </li>
        <li>
          <a href="#certificate">Сертификаты</a>
        </li>
        <li>
          <a href="#pricing">Цены</a>
        </li>
        <li>
          <a href="#review">Отзывы</a>
        </li>
        {/* <li>
            <a href="#photo">Photos</a>
          </li> */}
        <li>
          <a href="#faq">FAQ</a>
        </li>
        <li>
          <a href="#message">Связаться со мной</a>
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
      <div className={style.terms}>
        <Link to="/terms">&copy; Все права защищены 2022</Link>
      </div>
    </div>
  );
}

export default Footer;
