import React, { useContext, useEffect, useRef, useState } from "react";
import "../Header/header.scss";
import { AiOutlineLogin } from "react-icons/ai";
import { IoNotificationsOutline } from "react-icons/io5";
import { BsPersonCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import { TfiArrowCircleDown, TfiArrowCircleUp } from "react-icons/tfi";
import { InformationContext } from "../../Contexts/HeaderInformationContext";
import HeaderNavbarModal from "../../Modals/HeaderNavbarModal";
import { vipButtonStyle } from "../../GlobalStyles/GlobalStyles";
import HeaderVipModal from "../../Modals/HeaderVipModal";

const Header = () => {

  const navItemsLeft = [
    { id: 1, title: "İş tap" },
    { id: 2, title: "İşçi tap" },
    { id: 3, title: "Portfolio" },
    { id: 4, title: "Parametrlər" },
    { id: 5, title: "Dəstək al" },
  ];

  //headerRight items tooltip on hover
  const [tooltip, setTooltip] = useState("");
  const [activeVipButton, setActiveVipButton] = useState(false);
  const [vip, setVip] = useState(false);
  const handleTooltipNotifications = (tooltipValue) => {
    setTooltip(tooltipValue);
  };
  const toggleVip = () => {
    setVip(!vip);
    if (vip) {
      setActiveVipButton(true);
    } else {
      setActiveVipButton(false);
    }
  };

  //navbar(header)((information(tooltip())))
  const { handleInformation, information } = useContext(InformationContext);

  //header reng deyisimi (header change color)
  const headerContainerRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const min = 200;
      const max = 5000;
      if (
        scrollPosition >= min &&
        scrollPosition <= max &&
        headerContainerRef.current
      ) {
        headerContainerRef.current.style.backgroundColor = "#F3FDE8";
      } else {
        headerContainerRef.current.style.backgroundColor = "white";
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="header-container" ref={headerContainerRef}>
      <div className="cover">
        <Link to="/">
          <img src="../Images/mainLogo.png" width={150} height={47} />
        </Link>
      </div>

      <div className="header-left">
        <nav className="leftNavitems">
          {navItemsLeft.map((items) => (
            <div key={items.id}>
              {items.title === "İş tap" ? (
                <Link
                  to="/searchwork"
                  className="li"
                  onMouseEnter={() => handleInformation("SearchWork")}
                  onMouseLeave={() => handleInformation("")}
                >
                  {items.title}
                </Link>
              ) : items.title === "İşçi tap" ? (
                <Link
                  to=""
                  className="li"
                  onMouseEnter={() => handleInformation("SearchWorker")}
                  onMouseLeave={() => handleInformation("")}
                >
                  {items.title}
                </Link>
              ) : items.title === "Dəstək al" ? (
                <Link
                  to=""
                  className="li"
                  onMouseEnter={() => handleInformation("getSupport")}
                  onMouseLeave={() => handleInformation("")}
                >
                  {items.title}
                </Link>
              ) : items.title === "Portfolio" ? (
                <Link
                  to="/portfolio"
                  className="li"
                  onMouseEnter={() => handleInformation("getPortfolio")}
                  onMouseLeave={() => handleInformation("")}
                >
                  {items.title}
                </Link>
              ) : items.title === "Parametrlər" ? (
                <Link
                  to=""
                  className="li"
                  onMouseEnter={() => handleInformation("getOptions")}
                  onMouseLeave={() => handleInformation("")}
                >
                  {items.title}
                </Link>
              ) : (
                items.title
              )}
            </div>
          ))}
        </nav>
        {information && <HeaderNavbarModal />}
      </div>

      <div className="header-right">
        <div className="icons">
          <IoNotificationsOutline
            size={23}
            color="#666666"
            id="notif"
            onMouseEnter={() => handleTooltipNotifications("Bildirişlər")}
            onMouseLeave={() => handleTooltipNotifications("")}
          />
          <Link to='/login/select' id="login">
          <AiOutlineLogin
            size={23}
            color="#666666"
            onMouseEnter={() => handleTooltipNotifications("Giriş")}
            onMouseLeave={() => handleTooltipNotifications("")}
            />
          </Link>

          <Link to='/register/select' id="person">
          <BsPersonCircle
            size={23}
            color="#666666"
            onMouseEnter={() => handleTooltipNotifications("Qeydiyyat")}
            onMouseLeave={() => handleTooltipNotifications("")}
            />
          </Link>

          {/* VIP BUTTON */}
          <section className="getVip" onClick={toggleVip}>
            <Link
              id="getVipButton"
              style={{
                backgroundColor: activeVipButton
                  ? vipButtonStyle.DeActiveColor
                  : vipButtonStyle.ActiveColor,
              }}
            >
              VIP ol
              {activeVipButton ? (
                <TfiArrowCircleDown style={{ marginLeft: "10px" }} size={20} />
              ) : (
                <TfiArrowCircleUp style={{ marginLeft: "10px" }} size={22} />
              )}
            </Link>
          </section>
          {vip && <HeaderVipModal />}
          {/* VIP BUTTON */}
        </div>
        {tooltip && (
          <div
            className="notifications"
            style={{
              fontSize: "14px",
              right:
                tooltip === "Giriş"
                  ? "7.2rem"
                  : tooltip === "Qeydiyyat"
                  ? "4.7rem"
                  : tooltip === "Bildirişlər"
                  ? "10rem"
                  : null,
            }}
          >
            <h5 className="tooltip">{tooltip}</h5>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
