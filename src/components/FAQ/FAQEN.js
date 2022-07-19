import React from "react";
import Accordion from "./Accordion";
import style from "./FAQ.module.css";

function FAQEN() {
  return (
    <div id="faq" className={style.container}>
      <h2>FAQ</h2>

      <Accordion
        question={"How long is the session going?"}
        content={`Each session is 25-40 minutes long on Zoom`}
      />

      <Accordion
        question={"How many sessions do I need and how often?"}
        content={`Each client decides on his own for how many sessions he is ready to work out to achieve a goal. 
        Usually from 4 to 10 meetings is enough to solve almost any request.
                `}
      />
      <Accordion
        question={"What is better for me, Coaching or Counseling?"}
        content={`Coaching is different in how the coach approaches the conversation with the client. 
        Coaches don't teach but guide you through the discovery process by using active listening 
        skills, asking important questions, expanding thought processes, identifying limited 
        beliefs, developing action steps and follow-ups.

                `}
      />
      <Accordion
        question={"Why does it matter to find a certified coach?"}
        content={`The International Coach Federation or ICF is the most leading credential authority in that profession.
         ICF set up standards for training in the core competencies and ethics. 
         Certified coaches always went through many hours of training, practice and mentoring. 
`}
      />
      <Accordion
        question={"When do I need coaching?"}
        content={`The main idea of coaching is to get maximum performance by helping the client reach their maximum potential. 
        The main goal of coaching is to develop leadership qualities, 
        create self-discipline, build a system of self-confidence, create motivation and improve self-awareness.
`}
      />
      <Accordion
        question={"Is there a confidentiality agreement?"}
        content={`All information provided will be kept confidential. We will not disclose your personal information to a third party. 
`}
      />
    </div>
  );
}

export default FAQEN;
