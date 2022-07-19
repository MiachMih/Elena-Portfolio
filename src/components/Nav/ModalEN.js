import React from "react";
import style from "./Modal.module.css";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

function ModalEN(props) {
  const { toggleModal } = props;
  return (
    <div className={style.container}>
      <div className={style.content}>
        <button className={style.btn} onClick={toggleModal}>
          RETURN
        </button>
        <ul>
          <li>
            <a href="#" onClick={toggleModal}>
              About Me
            </a>
          </li>
          <li>
            <a href="#mission" onClick={toggleModal}>
              Mission
            </a>
          </li>
          <li>
            <a href="#certificate" onClick={toggleModal}>
              Certificates
            </a>
          </li>
          <li>
            <a href="#pricing" onClick={toggleModal}>
              Pricing
            </a>
          </li>
          <li>
            <a href="#review" onClick={toggleModal}>
              Reviews
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
              Contact Me
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
            href="https://www.instagram.com/elen_coaching/"
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

export default ModalEN;
