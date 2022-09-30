import React from "react";
import CV from "../../assets/cv.pdf";


const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download='Uardem_Cv.pdf'  className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Vamos conversar !
      </a>
      
    </div>
  );
};

export default CTA;
