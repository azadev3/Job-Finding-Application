import React, { useState } from "react";
import "../OptionsModals/OptionsModals.scss";
import { LiaExchangeAltSolid } from "react-icons/lia";
import { warnMsg } from "../../../GlobalStyles/GlobalStyles";

const MainInformations = () => {
  //deyis butonlarina tiklayarken acilan inputun konfiqurasiyasi
  const [openChangerInput, setOpenChangerInput] = useState(null);

  const handleOpenChangerInput = (value) => {
    if (openChangerInput === value) {
      setOpenChangerInput(null);
    } else {
      setOpenChangerInput(value);
    }
  };

  //inputun yazilan deyerin diger inputa yansmasi ve target islemleri
  const [nameInput, setNameInput] = useState("");
  const [surnameInput, setSurnameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [telInput, setTelInput] = useState("");
  const handleChangeInput = (e, field) => {
    const inputValue = e.target.value;
    if (field === "name") {
      setNameInput(inputValue);
    } else if (field === "surname") {
      setSurnameInput(inputValue);
    } else if (field === "email") {
      setEmailInput(inputValue);
    } else if (field === "tel") {
      setTelInput(inputValue);
    } else {
      return "";
    }
  };
  //eger user inputa bosluq qoydusa error ver (ad ve soyad deyis inputlarina aiddir)
  const [spaceAllowed, setSpaceAllowed] = useState(false);

  const renderInput = () => {
    switch (openChangerInput) {
      case "Adı dəyiş":
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <input
              type="text"
              placeholder="Yenisini daxil edin.."
              value={nameInput}
              onChange={(e) => handleChangeInput(e, "name")}
              onKeyDown={(e) => {
                if (e.key === " ") {
                  e.preventDefault();
                  setSpaceAllowed(true);
                } else {
                  setSpaceAllowed(false);
                }
              }}
            />
            {spaceAllowed && (
              <span style={warnMsg}>
                Ad yazarkən, <strong>"Space"</strong> tuşundan istifadə etməyin.
              </span>
            )}
          </div>
        );

      case "Soyadı dəyiş":
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <input
              type="text"
              placeholder="Yenisini daxil edin.."
              value={surnameInput}
              onChange={(e) => handleChangeInput(e, "surname")}
              onKeyDown={(e) => {
                if (e.key === " ") {
                  e.preventDefault();
                  setSpaceAllowed(true);
                } else {
                  setSpaceAllowed(false);
                }
              }}
            />
            {spaceAllowed && (
              <span style={warnMsg}>
                Soyad yazarkən, <strong>"Space"</strong> tuşundan istifadə
                etməyin.
              </span>
            )}
          </div>
        );
      case "E-maili dəyiş":
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <input
              type="email"
              placeholder="Yenisini daxil edin.."
              value={emailInput}
              onChange={(e) => handleChangeInput(e, "email")}
              onKeyDown={(e) => {
                if (e.key === " ") {
                  e.preventDefault();
                  setSpaceAllowed(true);
                } else {
                  setSpaceAllowed(false);
                }
              }}
            />
            {spaceAllowed && (
              <span style={warnMsg}>
                Email yazarkən, <strong>"Space"</strong> tuşundan istifadə
                etməyin.
              </span>
            )}
          </div>
        );
      case "Telefon nömrəsini dəyiş":
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <input
              type="tel"
              placeholder="Yenisini daxil edin.."
              value={telInput}
              onChange={(e) => handleChangeInput(e, "tel")}
              onKeyDown={(e) => {
                if (e.key === " ") {
                  e.preventDefault();
                  setSpaceAllowed(true);
                } else {
                  setSpaceAllowed(false);
                }
              }}
            />
            {spaceAllowed && (
              <span style={warnMsg}>
                Nömrə yazarkən, <strong>"Space"</strong> tuşundan istifadə
                etməyin.
              </span>
            )}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="main-informations">
      <section className="profile">
        <img
          id="profile"
          src="./Images/profile-not.png"
          width={100}
          height={100}
        />
        <span id="changeProfil">Profili dəyiş</span>
        <div className="currentInfos">
          <article className="title">
            <span>Hal-hazırda:</span>
          </article>

          <article className="infos">
            <section className="names">
              <label>Ad:</label>
              <label>Soyad:</label>
              <label>E-mail:</label>
              <label>Telefon:</label>
            </section>
            <section className="data-verify">
              <span>Azad</span>
              <span>Mirheydarzada</span>
              <span>azad.miri6@gmail.com</span>
              <span>021393932</span>
            </section>
          </article>
        </div>
      </section>

      <section className="profile-informations">
        <div className="editing-main-informations-box">
          <div className="layerone">
            {[
              "Adı dəyiş",
              "Soyadı dəyiş",
              "E-maili dəyiş",
              "Telefon nömrəsini dəyiş",
            ].map((value) => (
              <div
                key={value}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <button
                  onClick={() => handleOpenChangerInput(value)}
                  style={{
                    display: openChangerInput === value ? "none" : "block",
                  }}
                >
                  {value}
                </button>
                {openChangerInput === value && (
                  <button
                    onClick={() => handleOpenChangerInput(null)}
                    style={{ marginTop: "0.4rem" }}
                  >
                    Geri
                  </button>
                )}
                <section style={{ display: "flex", marginTop: "0.3rem" }}>
                  {openChangerInput === value && renderInput()}
                </section>
              </div>
            ))}
          </div>

          <div className="icons">
            <LiaExchangeAltSolid size={22} />
            <LiaExchangeAltSolid size={22} />
            <LiaExchangeAltSolid size={22} />
            <LiaExchangeAltSolid size={22} />
          </div>

          <div className="layertwo">
            <div className="changedName">
              <div className="changeValuediv">
                <input
                  disabled
                  type="text"
                  value={openChangerInput === "Adı dəyiş" ? nameInput : ""}
                  onChange={(e) => handleChangeInput(e, "name")}
                />
                {nameInput && openChangerInput === "Adı dəyiş" && (
                  <button id="okBtn">Dəyiş</button>
                )}
              </div>
            </div>

            <div className="changedSurname">
              <div className="changeValuediv">
                <input
                  disabled
                  type="text"
                  value={
                    openChangerInput === "Soyadı dəyiş" ? surnameInput : ""
                  }
                  onChange={(e) => handleChangeInput(e, "surname")}
                />
                {surnameInput && openChangerInput === "Soyadı dəyiş" && (
                  <button id="okBtn">Dəyiş</button>
                )}
              </div>
            </div>
            <div className="changedEmail">
              <div className="changeValuediv">
                <input
                  disabled
                  type="email"
                  value={openChangerInput === "E-maili dəyiş" ? emailInput : ""}
                  onChange={(e) => handleChangeInput(e, "email")}
                />
                {emailInput && openChangerInput === "E-maili dəyiş" && (
                  <button id="okBtn">Dəyiş</button>
                )}
              </div>
            </div>
            <div className="changedTelephone">
              <div className="changeValuediv">
                <input
                  disabled
                  type="tel"
                  value={
                    openChangerInput === "Telefon nömrəsini dəyiş"
                      ? telInput
                      : ""
                  }
                  onChange={(e) => handleChangeInput(e, "tel")}
                />
                {telInput && openChangerInput === "Telefon nömrəsini dəyiş" && (
                  <button id="okBtn">Dəyiş</button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainInformations;
