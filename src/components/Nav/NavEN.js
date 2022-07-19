import React, { useState } from "react";
import style from "./Nav.module.css";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import ModalEN from "./ModalEN";

function NavEN() {
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
          <a href="#mission">Mission</a>
        </li>
        <li>
          <a href="#certificate">Certificates</a>
        </li>
        <li>
          <a href="#pricing">Pricing</a>
        </li>
        <li>
          <a href="#review">Reviews</a>
        </li>
        {/* <li>
            <a href="#photo">Photos</a>
          </li> */}
        <li>
          <a href="#faq">FAQ</a>
        </li>
        <li>
          <a href="#message">Contact me</a>
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
          href="https://www.instagram.com/elen_coaching/"
          target="_blank"
          rel="noreferrer"
        >
          <BsInstagram className={style.icons} />
        </a>
      </div>

      <div className={style.dropDown}>
        <FiMenu onClick={toggleModal} />
      </div>

      {isOpenModal && <ModalEN toggleModal={toggleModal} />}
    </header>
  );
}

export default NavEN;
