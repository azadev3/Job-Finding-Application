import React, { useState } from 'react'
import '../OptionsModals/OptionsModals.scss'
import { AiOutlineTags } from 'react-icons/ai'
import { FiEdit } from 'react-icons/fi'
import { TbArrowsExchange2 } from 'react-icons/tb'

const Skills = () => {
     const CurrentSkills = [
          {id: 1, title: 'JavaScript'},
          {id: 2, title: 'React'},
          {id: 3, title: 'Modulesreany'},
          {id: 4, title: 'Webscocket'},
          {id: 5, title: 'Temaimt'},
          {id: 6, title: 'Javaewt'},
          {id: 7, title: 'ewflewkf'},
          {id: 8, title: 'wefljkwef'},
          {id: 9, title: 'weflkweflw'},
          {id: 10, title: 'J2934kjme'},
          {id: 11, title: 'ewrlkewrlew'},
          {id: 12, title: 'ewr0ikwe'},
          {id: 13, title: 'Javwerk'},
          {id: 14, title: 'Java'},
          {id: 15, title: 'css sass'},
          {id: 16, title: 'tialwing'},
          {id: 17, title: 'JavaScrt'},
          {id: 18, title: 'JavaS23cript'},
          {id: 19, title: 'Jaqw03pt'},
          {id: 20, title: 'cokecript'},
     ]

     //new skills constant variables
     const [editableSkills, setEditableSkills] = useState({});
     const [newValues, setNewValues] = useState({});
     
     //in input area
     const transformOnInputArea = (id) => {
       setEditableSkills((prevEditableSkills) => ({ ...prevEditableSkills, [id]: true }));
     };

     //add new value on input and if input area don't empty, then new message for user
     const [buttons, setButtons] = useState(false);
     //if entering new value, then change color
     const [changeColor, setChangeColor] = useState(false);
     const newValueOnInput = (e, id) => {
       const valueInput = e.target.value;
       setNewValues((prevNewValues) => ({ ...prevNewValues, [id]: valueInput }))
       valueInput ? setButtons(true) : setButtons(false)
       valueInput ? setChangeColor((prevNewColor) => ({...prevNewColor, [id]: valueInput})) 
       : setChangeColor(prevNewColor => prevNewColor)
     };

     //submit changes on new skills
     const submitChanges = (id) => {
       setEditableSkills((prevEditableSkills) => ({ ...prevEditableSkills, [id]: false }));
     };

     //if user click on the enter button
     const handleEntered = (e, id) => {
       if (e.key === 'Enter') {
         if (newValues[id]) {
           submitChanges(id);
         }
       }
     };

     //remove Changes
     const removeChanges = (id) => {
          setButtons(false);
          setChangeColor(false);
          setNewValues({});
          console.log('ok');
     }
   
     return (
       <div className='skills-container'>
         <div className='current-skills'>
           <section className='title'>
             <span>Hal-hazırda</span>
           </section>
           <section className='skills'>
             {CurrentSkills.map((skills) => (
               <li key={skills.id} className={changeColor[skills.id] ? 'newColorLi' : null}>
                 <AiOutlineTags id='tagicon' />
   
                 {editableSkills[skills.id] ? (
                   <input
                     type='text'
                     id='changedInput'
                     value={newValues[skills.id] || ''}
                     onChange={(e) => newValueOnInput(e, skills.id)}
                     onKeyDown={(e) => handleEntered(e, skills.id)}
                     maxLength={25}
                   />
                 ) : (
                   <div>
                     {newValues[skills.id] || skills.title}
                   </div>
                 )}
   
                 {editableSkills[skills.id] && (
                   <TbArrowsExchange2
                     id='submitChangesBtn'
                     onClick={() => submitChanges(skills.id)}
                   />
                 )}
   
                 {!editableSkills[skills.id] && (
                   <FiEdit
                     id='editicon'
                     onClick={() => transformOnInputArea(skills.id)}
                   />
                 )}
               </li>
             ))}
           </section>
     
           {buttons ? (
           <div className='buttons'>
               <button>Dəyişiklikləri yadda saxla</button>
               <button onClick={() => removeChanges()}>Geri al</button>
          </div>
           ) : null}
           
           
         </div>
       </div>
     );
   };
   

export default Skills