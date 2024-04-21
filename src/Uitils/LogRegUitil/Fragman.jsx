import React, { useContext, useEffect, useRef, useState } from "react";
import "../LogRegUitil/Fragman.scss";
import { Link } from "react-router-dom";

const Fragman = () => {
  //slide background show
  const [buttonSlide, setButtonSlide] = useState(false); //this state start on button slide (basladan)
     useEffect(() => {
     setButtonSlide(true)
  }, [])


  return (
    <div className="log-reg-fragment">
      <div className={`select-buttons ${buttonSlide ? 'slideopen' : 'slideclose'}`}>
        <div className="title">
          <h3>Lütfən aşağıdan sizə uyğun olanı seçin</h3>
        </div>
        <div className="buttons">
          <Link to='/registerform' id="searchwork">
            İş axtarıram
          </Link>
          <Link to='/registerform' id="searchworker">
            İşçi axtarıram
          </Link>
        </div>
     </div>
    </div>
  );
};

export default Fragman;
