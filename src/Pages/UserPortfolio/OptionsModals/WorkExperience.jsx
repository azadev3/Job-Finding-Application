import React, { useState } from 'react'
import '../OptionsModals/OptionsModals.scss'
import { BsPersonWorkspace } from 'react-icons/bs'
import { okayButton } from '../../../GlobalStyles/GlobalStyles';

const WorkExperience = () => {

     //textareade deyisiklik olan moment cixan buton ve target
     const [textareaWriting, setTextareaWriting] = useState("");


  return (
     <div className='work-experience'>
               <div className="experience">


               <article className="current-experience">

               <article className='title'>
                    <span>Hal-hazırda</span>
               </article>
                         <article className="work-experience-text">
                         <label><BsPersonWorkspace size={22} style={{paddingRight: '0.5rem'}}/>İş təcrübələri</label>
                              <p>
                                   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime est deserunt totam modi quaerat sint similique possimus ipsam facilis excepturi ullam necessitatibus delectus perspiciatis repellat, amet voluptatibus consequuntur ipsa dolores sed maiores molestiae at. Modi nihil quo nisi molestias eaque.
                              </p>
                         </article>
               </article>

               <div className='editing-work-experience'>
                    <textarea 
                    onChange={(e) => setTextareaWriting(e.target.value)}
                    cols={100} rows={9} maxLength={2500} id='text'
                    placeholder="Bura dəyişmək istədiyiniz söz və ya cümlələri yazın.."
                    />
               </div>

               {textareaWriting && (
                    <button id='okBtn'>Dəyiş</button>
               )}

               </div>
               
     </div>
  )
}

export default WorkExperience