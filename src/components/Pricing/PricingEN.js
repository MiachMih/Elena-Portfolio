import React from "react";
import style from "./Pricing.module.css";
import Card from "./CardEN";

function PricingEN() {
  return (
    <div id="pricing" className={style.container}>
      <h2>Pricing</h2>
      <div className={style.preText}>
        <p>Session 40-60 minutes</p>
        <p>Online on zoom</p>
      </div>
      <div className={style.content}>
        <Card
          header={"Introduction session"}
          length={"30 minutes"}
          content={`
          During this session, we will meet each other and determine if coaching makes sense for you at this time, if so, which package is right for your goal.
          `}
          price={"FREE"}
          link={
            "https://calendly.com/coach-emotionalintelligence/introduction-session"
          }
        />
        <Card
          header={"Strategic session"}
          length={"40-60 minutes"}
          content={`
          Do you have an emergency problem which has to be solved ASAP? Or Need just 1 coaching session?
          ou are in the right spot.

          `}
          price={"$300"}
          link={
            "https://calendly.com/coach-emotionalintelligence/strategic-session"
          }
        />
        <Card
          header={"Minimum pack"}
          length={"4 meetings (20-40 min)"}
          content={`
          During this time, you need to determine your true values, decide on important tasks, and take on a responsible plan. find limiting attitudes, gain motivation
          `}
          price={"$950"}
          link={"https://calendly.com/coach-emotionalintelligence/minimum-pack"}
        />
        <Card
          header={"Package Optimist"}
          length={"10 meetings (20-40 min)"}
          content={`
          Time sufficient to discover and search for ways to solve a pretty global problem or achieve multiple goals, eliminate stereotypes, transformative changes.
          `}
          price={"$1950"}
          link={
            "https://calendly.com/coach-emotionalintelligence/package-optimist"
          }
        />
      </div>
    </div>
  );
}

export default PricingEN;
