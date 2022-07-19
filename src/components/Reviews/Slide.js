import React from "react";
import style from "./Slide.module.css";

function Slide(props) {
  const { content, author } = props;
  return (
    <div className={style.content}>
      <strong>{author}</strong>
      {content}
    </div>
  );
}

export default Slide;
