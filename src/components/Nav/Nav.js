import React, { useState } from "react";
import style from "./Nav.module.css";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import Modal from "./Modal";

function Nav() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  function toggleModal() {
    setIsOpenModal((state) => {
      return !state;
    });
  }

  return (
    <header className={style.navBar}>
      <nav className={style.name}>
        <a href="#">Elena Shcherbakova</a>
      </nav>
      <ul className={style["list-links"]}>
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

      <div className={style.dropDown}>
        <FiMenu onClick={toggleModal} />
      </div>

      {isOpenModal && <Modal toggleModal={toggleModal} />}
    </header>
  );
}

export default Nav;
