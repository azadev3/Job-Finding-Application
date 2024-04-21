import React, { useContext, useState } from 'react'
import '../UserPortfolio/Portfolio.scss';
import { MdWorkOutline } from 'react-icons/md'
import { AiOutlineRight } from 'react-icons/ai'
import { BsPersonWorkspace } from 'react-icons/bs'
import { BiBrain } from 'react-icons/bi'
import { IoSchoolOutline, IoBusinessOutline, IoLanguageSharp } from 'react-icons/io5'
import { AiOutlineTags } from 'react-icons/ai'
import Options from './PortfoliOptions/Options';
import { Link } from 'react-router-dom';

const Portfolio = () => {

     //portfolioya duzelis (portfolio edit)
     const [openOption, setOpenOption] = useState(false);
     const handleOpenPortfolioEditOptions = () => {
          setOpenOption(true);
     }

  return (
<>
     <div className='portfolio-user' 
     style={{display: openOption && 'none'}}
     >

       <div className='profile-main'>
          <div className='profile'>
          <section className='profile-photo'>
               <img src='./Images/profile-not.png' />
          </section>
          <div className='options'>
               <span id='infoEdit'>Məlumatlara düzəliş</span>
               <span id='or'>və ya</span>
               <i className="bi  bi-plus-circle-dotted" />
          </div>
          </div>

          <div className='informations'>
               <div className="top">
                    <span>Əsas məlumatlar</span>
               </div>
               <div className='main'>
                  <div className='names'>
                    <article className='name'>
                         <label><AiOutlineRight />Ad:</label>
                    </article>

                    <article className='surname'>
                         <label><AiOutlineRight />Soyad:</label>
                    </article>

                    <article className='email'>
                         <label><AiOutlineRight />E-mail</label>
                    </article>

                    <article className='tel'>
                         <label><AiOutlineRight />Telefon:</label>
                    </article>
                  </div>

                  <div className='data-verify'>
                    <span>Azad</span>
                    <span>Mirheydarzada</span>
                    <span>azad.miri6@gmail.com</span>
                    <span>+994513641920</span>
                  </div>
               </div>
          </div>
       </div>

          <span id='centerTitle'>İstifadəçinin digər məlumatları</span>


       <div className='main-information-area'>
          <div className='top-title'>
               <Link to='/portfolio/settings'>
               <span
               onClick={handleOpenPortfolioEditOptions}
               ><i className="bi bi-pencil-square"/>
               Portfolioya düzəliş et
               </span>
               </Link>
          </div>

          <div className='main'>
             <div className='informations'>
               <div className='names-main'>
                    <div className='work-exp'>
                         <label><BsPersonWorkspace size={22} style={{paddingRight: '0.5rem'}}/>İş təcrübələri</label>
                         <div className="work-experience-text">
                              <p>
                                   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime est deserunt totam modi quaerat sint similique possimus ipsam facilis excepturi ullam necessitatibus delectus perspiciatis repellat, amet voluptatibus consequuntur ipsa dolores sed maiores molestiae at. Modi nihil quo nisi molestias eaque.
                              </p>
                         </div>
                    </div>

                    <div className='education'>
                         <label><IoSchoolOutline size={22} style={{paddingRight: '0.5rem'}}/>Təhsil</label>
                         <div className='content'>
                              <span>Ali</span>
                         </div>
                    </div>

                    <div className='job'>
                         <label><MdWorkOutline size={22} style={{paddingRight: '0.5rem'}}/>İxtisas</label>
                         <div className='content'>
                              <span>Full Stack Developer</span>
                         </div>
                    </div>

                    <div className='job-select'>
                         <label><IoBusinessOutline size={22} style={{paddingRight: '0.5rem'}}/>İstədiyi iş mühiti</label>
                         <div className='content'>
                              <span>Freelance</span>
                         </div>
                    </div>

                    <div className='languages'>
                         <label><IoLanguageSharp size={22} style={{paddingRight: '0.5rem'}}/>Danışdığı dillər</label>
                         <div className='content-language'>
                              <span>Turkish, English French, Spanish</span>
                         </div>
                    </div>
               </div>
             </div>

               <div className='skil-informations'>
                    <div className='skils'>
                         <article className="title">
                              <span><BiBrain size={22} style={{paddingRight: '0.5rem'}}/>Əsas biliklər</span>
                         </article>

                         <section className="content">
                              <div id='tags'>
                                   <li><AiOutlineTags size={22}/> javaScript</li>
                                   <li><AiOutlineTags size={22}/> Html</li>
                                   <li><AiOutlineTags size={22}/> javaSc</li>
                                   <li><AiOutlineTags size={22}/> css</li>
                                   <li><AiOutlineTags size={22}/> api</li>
                                   <li><AiOutlineTags size={22}/> uiy design</li>
                                   <li><AiOutlineTags size={22}/> rggggy</li>
                                   <li><AiOutlineTags size={22}/> academy forcS</li>
                                   <li><AiOutlineTags size={22}/> javaScript</li>
                                   <li><AiOutlineTags size={22}/> nodejs</li>
                                   <li><AiOutlineTags size={22}/> expressjs</li>
                                   <li><AiOutlineTags size={22}/> mysQl</li>
                                   <li><AiOutlineTags size={22}/> lorme39</li>
                                   <li><AiOutlineTags size={22}/> apdim4</li>
                                   <li><AiOutlineTags size={22}/> dkjkdfj 095u2n 92ji4jt4</li>
                                   <li><AiOutlineTags size={22}/> javaScript</li>
                                   <li><AiOutlineTags size={22}/> moraingg</li>
                                   <li><AiOutlineTags size={22}/> rgekghjkgeg</li>
                                   <li><AiOutlineTags size={22}/> ergegeg365gh4h</li>
                                   <li><AiOutlineTags size={22}/> ergregreg</li>
                              </div>
                         </section>
                    </div>
               </div>
          </div>
       </div>
       

     </div>
     {openOption && <Options />}
</>
  )
}

export default Portfolio