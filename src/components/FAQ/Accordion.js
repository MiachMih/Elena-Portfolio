import React, { useState, useRef } from "react";
import style from "./FAQ.module.css";
import styled from "styled-components";

const Div = styled.div`
  overflow: hidden;
  height: ${(props) => {
    if (props.innerRef.current === undefined) {
      return "0px;";
    }
    const height = props.innerRef.current.clientHeight + 30;
    return props.collapsed ? height + "px" : "0px";
  }};
  transition: all 600ms ease-in-out;
`;

function Accordion(props) {
  const input = useRef();
  const [faq, setFAQ] = useState(false);

  const but = "btn";
  const butA = "btn-active";
  const { question, content } = props;
  return (
    <div className={style.content}>
      <button
        className={`${style[but]} ${faq ? style[butA] : ""}`}
        onClick={() => {
          setFAQ((state) => {
            return !state;
          });
        }}
      >
        {question}
      </button>
      <Div innerRef={input} collapsed={faq}>
        <p ref={input}>{content}</p>
      </Div>
    </div>
  );
}

export default Accordion;
