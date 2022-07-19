import React from "react";
import style from "./Language.module.css";

function Language(props) {
  const { lang, switchLang } = props;

  function onClickHandler() {
    switchLang();
  }

  return (
    <div className={style.container}>
      <div className={style.content}>
        <label className={style.toggle}>
          <input type="checkbox" />
          <span
            onClick={onClickHandler}
            className={style.labels}
            data-on="ENG"
            data-off="RUS"
          ></span>
        </label>
      </div>
    </div>
  );
}

export default Language;
