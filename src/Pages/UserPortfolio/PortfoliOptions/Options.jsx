import React, { useState } from 'react'
import '../PortfoliOptions/Options.scss'
import { BiArrowBack } from 'react-icons/bi'
import MainInformations from '../OptionsModals/MainInformations';
import WorkExperience from '../OptionsModals/WorkExperience';
import Educations from '../OptionsModals/Educations';
import Career from '../OptionsModals/Career';
import JobSelector from '../OptionsModals/JobSelector';
import Languages from '../OptionsModals/Languages';
import Skills from '../OptionsModals/Skills';
import { Link } from 'react-router-dom';
const Options = () => {
  
  //on settings, selected code's function
  const [selectPage, setSelectPage] = useState("Əsas məlumatlar");
  const handleSelectPageOption = (selector) => {
    setSelectPage(selector);
  }

  //component to be rendered in settings
  const renderPageTitle = () => {
    switch (selectPage) {
      case "Əsas məlumatlar":
        return <MainInformations />;
      case "İş təcrübələri":
        return <WorkExperience />;
      case "Təhsil":
        return <Educations />;
      case "İxtisas":
        return <Career />;
      case "İş mühiti":
        return <JobSelector />
      case "Dil":
        return <Languages />;
      case "Bacarıqlar":
        return <Skills />;
      default:
        return null;
    }
  }

  return (
    <div className='portfolio-options'>
      <div className='options'>
          <div className="toptitle">
            <Link to='/portfolio'>
            <span><BiArrowBack size={22} id='backBtn' />Geri</span>
            </Link>

            <span id='title'>
              <i className='bi bi-pencil-square' />
              Portfolio'ya düzəliş
            </span>
          </div>

          <div className='routes'>
            {['Əsas məlumatlar','İş təcrübələri','Təhsil','İxtisas','İş mühiti','Dil','Bacarıqlar']
            .map((option) => (
              <span key={option} onClick={() => handleSelectPageOption(option)} className={option === selectPage ? 'activeOption' : ""}>
                {option}
              </span>
            ))}
          </div>

          <div className='content'>
            {renderPageTitle()}
          </div>
      </div>
    </div>
  )
}

export default Options