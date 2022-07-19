import React from "react";
import style from "./Certificates.module.css";
import img1 from "../../assets/certificate_1.jpg";
import img2 from "../../assets/certificate_2.jpg";
import img3 from "../../assets/certificate_3.jpg";
import img4 from "../../assets/certificate_4.jpg";
import img5 from "../../assets/certificate_5.jpg";

function Certificates(props) {
  const { lang } = props;
  return (
    <div id="certificate">
      <div className={style.container}>
        {lang ? <h2>Сертификаты</h2> : <h2>Certificates</h2>}

        <div className={style.gridContainer}>
          <img src={img1} alt="membership certificate" />
          <img src={img2} alt="international professional coach certificate" />
          <img
            src={img3}
            alt="Genos emotional intelligence program certificate"
          />
          <img src={img4} alt="Associate Certified Coach certificate" />
          <img src={img5} alt="crisis coaching certificate" />
        </div>
      </div>
    </div>
  );
}

export default Certificates;
