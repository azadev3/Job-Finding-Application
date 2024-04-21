import React, { useContext, useRef, useState } from "react";
import { SearchWorkContext } from "../Contexts/SearchWorkContext";

const SearchWorkCategories = () => {
  const categoryItems = [
    { id: 1, title: "IT & Komputerləşmə" },
    { id: 2, title: "Marketinq" },
    { id: 3, title: "Maliyyə" },
    { id: 4, title: "Dizayn" },
    { id: 5, title: "Video & Montaj" },
    { id: 6, title: "Audio & Səsləndirmə" },
  ];

  const altCategoryComputer = [
    { id: 1, title: "AI Engineer" },
    { id: 2, title: "Cloud Engineer" },
    { id: 3, title: "Computer Engineer" },
    { id: 4, title: "Data Scientist" },
    { id: 5, title: "Data Analyst" },
    { id: 6, title: "Database Adminstrator" },
    { id: 7, title: "Game Developer" },
    { id: 8, title: "Hardware Engineer" },
    { id: 9, title: "Information Security Specialist" },
    { id: 10, title: "Structural Analyst" },
    { id: 11, title: "Mobile App Developer" },
    { id: 12, title: "Network Administrator" },
    { id: 13, title: "Software Test Engineer" },
    { id: 14, title: "System Administrator" },
    { id: 15, title: "Web Developer" },
    { id: 16, title: "Software Engineer" },
  ];

  const altCategoryMarketing = [
    { id: 1, title: "Sosial Media İdarəçiliyi" },
    { id: 2, title: "Məzmun Marketinqi" },
    { id: 3, title: "SEO (Search Engine Optimization) Speçialisti" },
    { id: 4, title: "Ödənişli Reklam (PPC) Speçialisti" },
    { id: 5, title: "Email Marketinq Kampaniyaları" },
    { id: 6, title: "Mətn Tərtibatı & Tərtibetmə" },
    { id: 7, title: "Marketinq Materiallarının Qrafik Dizaynı" },
    { id: 8, title: "Video Marketinq & Montaj" },
    { id: 9, title: "Sosial Media Reklamı" },
    { id: 10, title: "Tərəfdaş Marketinqin İdarə Edilməsi" },
    { id: 11, title: "E-ticarət Marketinqi & Strategiyası" },
  ];

  const altCategoryFinance = [
    { id: 1, title: "Maliyyə İdarəçiliyi" },
    { id: 2, title: "Müəssisə Maliyyəsi & Konsultasiyası" },
    { id: 3, title: "Maliyyə Planlaması" },
    { id: 4, title: "İnvestisiya İdarəçiliyi" },
    { id: 5, title: "Məlumat Təhlilçisi & Rəyçi" },
    { id: 6, title: "Mühasib & Vergi Mütəxəssisi" },
    { id: 7, title: "Audit & Nəzarət Xidmətləri" },
    { id: 8, title: "Kredit Analizi & Qiymətləndirilmə" },
    { id: 9, title: "Müstəqil Maliyyə Müşaviri" },
    { id: 10, title: "Varlıq İdarəçiliyi & Yatırım" },
    { id: 11, title: "Mühasibat Sistemləri Optimalizasiyası" },
    { id: 12, title: "Konsolidasiya & Maliyyə Hesabatları" },
    { id: 13, title: "Tədbir Maliyyəsi & İnvestisiya" },
    { id: 14, title: "Müstəqil Emek Haqqı İdarəçiliyi" },
    { id: 15, title: "Əmlak Maliyyəsi & İnvestisiya" },
    { id: 16, title: "Bank & Finansal Xidmətlər Təhlili" },
    { id: 17, title: "Təhlükəsizlik & Hesabatlılıq" },
    { id: 18, title: "Ödənişlər & Kassa İdarəçiliyi" },
  ];

  const altCategoryGraphicDesign = [
    { id: 1, title: "Qrafik Dizayner" },
    { id: 2, title: "Logo Dizayner" },
    { id: 3, title: "Afiş & Reklam Dizayneri" },
    { id: 4, title: "Markalaşdırma & Korporativ Kimlik Dizaynı" },
    { id: 5, title: "Veb & İnteraktiv Dizayn" },
    { id: 6, title: "İllüstrasiya & Vektor Dizaynı" },
    { id: 7, title: "Ambalaj Dizaynı" },
    { id: 8, title: "Kitab & Dərgi Dizaynı" },
    { id: 9, title: "Produkt Dizaynı" },
    { id: 10, title: "Kartpostal & Dəvət Dizaynı" },
    { id: 11, title: "3D Modelləşdirmə & Animasiya" },
    { id: 12, title: "Sosial Media Dizaynı" },
    { id: 13, title: "Reklam Banner & Cüt Dizaynı" },
    { id: 14, title: "T-shirt & Geyim Dizaynı" },
    { id: 15, title: "Fotomanipulyasiya & Rütuş Dizaynı" },
    { id: 16, title: "İnterior & Memarlıq Dizaynı" },
    { id: 17, title: "Brend Dizaynı & Yenilik" },
    { id: 18, title: "Infografika & Statistika Dizaynı" },
    { id: 19, title: "CV & Portfolio Dizaynı" },
  ];

  const altCategoryVideoMontage = [
    { id: 1, title: "Videographer & Kameraman" },
    { id: 2, title: "Video Montajçısı" },
    { id: 3, title: "Animasiya & Motion Graphics Specialisti" },
    { id: 4, title: "Reklam & Promosyon Videolarının Yaradılması" },
    { id: 5, title: "Video Reklam Montajı" },
    { id: 6, title: "Sosial Media Üçün Videoların Hazırlanması" },
    { id: 7, title: "Müsabiqə & Tədbir Videolarının Montajı" },
    { id: 8, title: "Produkt Təqdimatı & Demo Videoları" },
    { id: 9, title: "Klip & Musiqi Videolarının Montajı" },
    { id: 10, title: "Müsahibələrin Montajı & Editlənməsi" },
    { id: 11, title: "Multimedia Prezentasiyalar & Slideshowlar" },
    { id: 12, title: "Video Editing" },
    { id: 13, title: "Videolara Səs & Səs Effektləri Əlavə Edilməsi" },
    { id: 14, title: "Reklam Filmlərinin Montajı & Post-produksiya" },
    { id: 15, title: "Storyboard & Konsept Yaradılması" },
    { id: 16, title: "YouTube & Sosial Media Üçün Content Yaradılması" },
    { id: 17, title: "Korporativ Təlim Videolarının Montajı" },
    {
      id: 18,
      title: "Videoların Format & Resolutionlarının Optimallaşdırılması",
    },
    { id: 19, title: "Videoların Effektlərinin Təkmilləşdirilməsi" },
  ];

  const altCategoryAudioVoiceover = [
    { id: 1, title: "Ses Aktyoru & Dublyaj" },
    { id: 2, title: "Reklam & Promosyon Səsləndirməsi" },
    { id: 3, title: "Dubbinq & Lokalizasiya Səsləndirməsi" },
    { id: 4, title: "Animasiya & Karikaturalar üçün Səsləndirmə" },
    { id: 5, title: "E-Kitab & Audiobook Səsləndirməsi" },
    { id: 6, title: "Video & Reklam Şəkillərinin Səsləndirilməsi" },
    { id: 7, title: "IVR & Telefon Sistemləri Üçün Səsləndirmə" },
    { id: 8, title: "Korporativ Tədbir & Prezentasiya Səsləndirməsi" },
    { id: 9, title: "Təhsil & Təlim Materiallarının Səsləndirilməsi" },
    { id: 10, title: "Multimedia & Prezentasiya Səsləndirməsi" },
    { id: 11, title: "Radio & TV Reklamları Üçün Səsləndirmə" },
    { id: 12, title: "Oyun & Animasiya Üçün Person Səsləndirməsi" },
    { id: 13, title: "Digital Medya & Sosial Media Üçün Səsləndirmə" },
    { id: 14, title: "Səs Effektlərinin Əlavə Edilməsi" },
    { id: 15, title: "Səsləndirmənin Post-prosesi & Redaktəsi" },
    { id: 16, title: "Mix & Mastering" },
  ];

const { openedMenu, closeMenu, menuRef, handleMenu } = useContext(SearchWorkContext)
  return (
    <div className="searchWorkCategory" ref={menuRef}>
      {categoryItems.map((items) => (
        <nav key={items.id} className="main-category">
          {items.id === 1 ? (
            <ul
              onMouseEnter={() => handleMenu("IT-Computer")}
              onMouseLeave={() => handleMenu("")}
            >
              <li>
                {items.title} <i className="bi bi-caret-right" />
              </li>
              {openedMenu === "IT-Computer" && (
                <div className="contentMenu">
                  <ul>
                    {altCategoryComputer.map((item) => (
                      <li onClick={() => closeMenu(item.title)} className="alt-li" key={item.id}>
                        {item.title}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </ul>
          ) : items.id === 2 ? (
            <ul
              onMouseEnter={() => handleMenu("Marketing")}
              onMouseLeave={() => handleMenu("")}
            >
              <li>
                {items.title} <i className="bi bi-caret-right" />
              </li>
              {openedMenu === "Marketing" && (
                <div className="contentMenu">
                  <ul>
                    {altCategoryMarketing.map((item) => (
                      <li onClick={() => closeMenu(item.title)} className="alt-li" key={item.id}>
                        {item.title}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </ul>
          ) : items.id === 3 ? (
            <ul
              onMouseEnter={() => handleMenu("Finance")}
              onMouseLeave={() => handleMenu("")}
            >
              <li>
                {items.title} <i className="bi bi-caret-right" />
              </li>
              {openedMenu === "Finance" && (
                <div className="contentMenu">
                  <ul>
                    {altCategoryFinance.map((item) => (
                      <li onClick={() => closeMenu(item.title)} className="alt-li" key={item.id}>
                        {item.title}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </ul>
          ) : items.id === 4 ? (
            <ul
              onMouseEnter={() => handleMenu("Design")}
              onMouseLeave={() => handleMenu("")}
            >
              <li>
                {items.title} <i className="bi bi-caret-right" />
              </li>
              {openedMenu === "Design" && (
                <div className="contentMenu">
                  <ul>
                    {altCategoryGraphicDesign.map((item) => (
                      <li onClick={() => closeMenu(item.title)} className="alt-li" key={item.id}>
                        {item.title}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </ul>
          ) : items.id === 5 ? (
            <ul
              onMouseEnter={() => handleMenu("VideoMontage")}
              onMouseLeave={() => handleMenu("")}
            >
              <li>
                {items.title} <i className="bi bi-caret-right" />
              </li>
              {openedMenu === "VideoMontage" && (
                <div
                  className="contentMenu"
                  style={{
                    width: handleMenu === "VideoMontage" ? "300px" : "450px",
                  }}
                >
                  <ul>
                    {altCategoryVideoMontage.map((item) => (
                      <li onClick={() => closeMenu(item.title)} className="alt-li" key={item.id}>
                        {item.title}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </ul>
          ) : items.id === 6 ? (
            <ul
              onMouseEnter={() => handleMenu("Audio")}
              onMouseLeave={() => handleMenu("")}
            >
              <li>
                {items.title} <i className="bi bi-caret-right" />
              </li>
              {openedMenu === "Audio" && (
                <div
                  className="contentMenu"
                  style={{
                    width: handleMenu === "VideoMontage" ? "300px" : "450px",
                  }}
                >
                  <ul>
                    {altCategoryAudioVoiceover.map((item) => (
                      <li onClick={() => closeMenu(item.title)} className="alt-li" key={item.id}>
                        {item.title}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </ul>
          ) : (
            items.title
          )}
        </nav>
      ))}
    </div>
  );
};

export default SearchWorkCategories;
