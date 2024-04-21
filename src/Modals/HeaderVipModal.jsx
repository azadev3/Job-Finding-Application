import React, { forwardRef, useRef } from 'react'
import { vipButtonModalStyle } from '../GlobalStyles/GlobalStyles'
import '../Components/Header/header.scss'
const HeaderVipModal = () => {
  return (
     <div className='search-info-modal2'
     style={vipButtonModalStyle}>
     <h3 style={{backgroundColor: "#454545",color: "#F8DE22",borderRadius: "10px",}}>
       👑VIP👑
     </h3>
     <p style={{padding: '15px',color: "#454545",letterSpacing: "-1px",fontWeight: "400",}}>
       HMM...🤔 deyəsən sadə format sizi qane etmir..
       <br />
       Bu məcburi deyil, ancaq saytdan daha geniş istifadə üçün
       cibinizə uyğun olan xidmətlərimizə baxa bilərsiz! <br />
       Daha çoxu üçün click'ləyin ! 🪴
     </p>
   </div>
  )
}

export default HeaderVipModal