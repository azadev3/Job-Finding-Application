import React, { useState } from 'react'
import '../OptionsModals/OptionsModals.scss'
import { IoBusinessOutline } from 'react-icons/io5'
const Career = () => {

     //kariyer girildiginde butonu aktivlesdirme 
     const [inputField, setInputField] = useState("");



  return (
     <div className='job-selector'>
          <div className='current-selector'>
          <label>
               <IoBusinessOutline size={22} style={{paddingRight: '0.5rem'}}/>
               İstədiyiniz iş mühiti
          </label>
          <span>Freelance</span>

          </div>

          <div className="changed-selector">
               <input type='text' placeholder='Seçilən iş mühitinizi dəyişin'
                onChange={(e) => {setInputField(e.target.value)}}
                maxLength={9}
                onKeyDown={(e) => {if (e.key === ' '){e.preventDefault();}}}
               />

               <button className={inputField ? '' : 'disabled'}>İş mühitini dəyişdir</button>
          </div>
     </div>
  )
}

export default Career