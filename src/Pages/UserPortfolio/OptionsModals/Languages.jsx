import React, { useState } from 'react'
import '../OptionsModals/OptionsModals.scss'
import { IoLanguageSharp } from 'react-icons/io5'
const Career = () => {

     //kariyer girildiginde butonu aktivlesdirme 
     const [inputField, setInputField] = useState("");



  return (
     <div className='lang'>
          <div className='current-lang'>
          <label>
               <IoLanguageSharp size={22} style={{paddingRight: '0.5rem'}}/>
               Dil
          </label>
          <span>Turkish, English, Spanish, Ecak,</span>

          </div>

          <div className="changed-lang">
               <input type='text' placeholder='Seçilən dil bacarığını dəyişin'
                onChange={(e) => {setInputField(e.target.value)}}
                maxLength={9}
                onKeyDown={(e) => {if (e.key === ' '){e.preventDefault();}}}
               />

               <button className={inputField ? '' : 'disabled'}>Dili dəyişdir</button>
          </div>
     </div>
  )
}

export default Career