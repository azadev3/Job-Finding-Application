import React, { useState } from 'react'
import '../OptionsModals/OptionsModals.scss'
import { IoSchoolOutline } from 'react-icons/io5'
import { okayButton } from '../../../GlobalStyles/GlobalStyles';

const Educations = () => {

     //inputa deyer girilerken buton cixartmaq
     const [inputField, setInputField] = useState("");

  return (
    <div className='educations'>
     <div className='current-educations'>
     <label>
          <IoSchoolOutline size={22} style={{paddingRight: '0.5rem'}}/>
          Təhsil
     </label>
          <span>Ali</span>
     </div>

     <div className='changed-educations'>
          <div className='content'>
          <input type='text' 
          placeholder='Təhsili dəyiş' 
          onChange={(e) => setInputField(e.target.value)}
          onKeyDown={(e) => {if (e.key === ' '){e.preventDefault();}}}
          />
          <button disabled={!inputField} className={inputField ? '' : 'disabled'}>Deyis</button>
          </div>
     </div>
    </div>
  )
}

export default Educations