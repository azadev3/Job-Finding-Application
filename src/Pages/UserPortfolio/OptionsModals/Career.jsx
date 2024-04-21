import React, { useState } from 'react'
import '../OptionsModals/OptionsModals.scss'
import { MdWorkOutline } from 'react-icons/md'
const Career = () => {

     //kariyer girildiginde butonu aktivlesdirme 
     const [inputField, setInputField] = useState("");



  return (
     <div className='career'>
          <div className='current-career'>
          <label>
               <MdWorkOutline size={22} style={{paddingRight: '0.5rem'}}/>
               İxtisas
          </label>
          <span>Full Stack Developer</span>

          </div>

          <div className="changed-career">
               <input type='text' placeholder='İxtisası dəyişin'
                onChange={(e) => {setInputField(e.target.value)}}
                maxLength={9}
                onKeyDown={(e) => {if (e.key === ' '){e.preventDefault();}}}
               />

               <button className={inputField ? '' : 'disabled'}>İxtisası dəyişdir</button>
          </div>
     </div>
  )
}

export default Career