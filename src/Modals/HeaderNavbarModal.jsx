import React, { useContext } from "react";
import { BsInfoCircle } from "react-icons/bs";
import { InformationContext } from "../Contexts/HeaderInformationContext";
const HeaderNavbarModal = () => {
  const { information } = useContext(InformationContext);

  return (
    <div
      className="search-info-modal"
      style={{
        width: information === "SearchWorker" ? "370px" : null,
        left:
          information === "SearchWork" ? '0rem'
        : information === "SearchWorker" ? '0rem'
        : information === "getPortfolio" ? "10rem"
        : information === "getOptions" ? "18rem"
        : information === "getSupport" ? "25rem" : "",
     }}
    >
      <BsInfoCircle
        style={{
          position: "absolute",
          left: "1rem",
          top: "1rem",
        }}
        size={23}
      />
      {information === "SearchWork" ? (
        <>
          <h5>İş tap</h5>
          <p>
            İxtisasınız üzrə axtarış edin, çıxan nəticələrdən <br />
            sizə uyğun işləri qiymətləndirin və başlayın. 😉
          </p>
        </>
      ) : information === "SearchWorker" ? (
        <>
          <h5>İşçi tap</h5>
          <p>
            Siz iş yox, işçi axtarırsınız ?
            <br />
            işinizi təcrübəli və məsulliyyətli insanlara gördürün! <br /> 
            Daxil olun və onlarca işçi arasından sizə uyğun olanlara <br />
            online şəkildə mesaj atın. Onları işə alın ✌️
          </p>
        </>
      ) 
        : information === "getSupport" ? (
        <>
          <h5>Dəstək ?</h5>
          <p>
            İstədiyin problemi buradan bildir. Əmin ol ki,
            <br />
            ən qısa müddətdə geri dönüş olunacaq ❤️
          </p>
        </>
      ) : information === "getPortfolio" ? (
        <>
        <h5>Portfolion!✌️</h5>
          <p>
            Bura sənin əsas yerindir..
            <br />
            Bütün məlumatların buradadır!
          </p>
        </>
      ) : information === "getOptions" ? (
        <>
        <h5>Parametrlər ⚙️</h5>
          <p>
            Türkçə desək, ayarlar 😊
          </p>
        </>
      ) : ""}
    </div>
  );
};

export default HeaderNavbarModal;
