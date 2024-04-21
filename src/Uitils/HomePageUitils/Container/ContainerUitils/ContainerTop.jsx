import React, { useState } from 'react'
import { BiMinus, BiPlus } from 'react-icons/bi'
import { accordionContentStyle } from '../../../../GlobalStyles/GlobalStyles';

const ContainerTop = () => {
  const [accord1Open, setAccord1Open] = useState(false);
  const [accord2Open, setAccord2Open] = useState(false);
  const [accord3Open, setAccord3Open] = useState(false);
  const [accord4Open, setAccord4Open] = useState(false);  

  return (
    <div className='container-homepage-top-area'>
    <div className='left-area'>
        <div className='accordion'>
          <div className='titleBox'>
            <h1 id='title'><span id='pullwork'>PullWork</span> sizə nə vəd edir?</h1>
          </div>

          <section className={`accord1 ${accord1Open ? 'openAccordion' : ''}`} style={{position: 'relative'}}>
            <h5 style={{paddingLeft: '3rem', zIndex: '10', visibility: accord1Open ? 'hidden' : ''}}>Geniş fürsətlər</h5>
              {accord1Open ? 
              <BiMinus size={30} cursor='pointer' className='plusIcon' style={{zIndex: '10'}}
              onClick={() => setAccord1Open(!accord1Open)}
              /> 
              : 
              <BiPlus size={30} cursor='pointer' className='plusIcon' style={{zIndex: '10'}}
              onClick={() => setAccord1Open(!accord1Open)}
              />}

              {accord1Open && (
                <p style={accordionContentStyle}>
                  PullWork sizə öz sahənizdə geniş fürsətlər təklif edir. İşləmirsiniz və evdən <br /> 
                  işləmək sizə daha rahat gəlir? O zaman sahənizi seçin, portfolionuzu hazırlayın <br />
                  və işə başlayın!
                </p>
              )}
          </section>

          <section className={`accord2 ${accord2Open ? 'openAccordion' : ''}`} style={{position: 'relative'}}>
            <h5 style={{paddingLeft: '3rem', zIndex: '10', visibility: accord2Open ? 'hidden' : ""}}>İstədiyiniz məkandan çalışın</h5>
            {accord2Open ? 
            <BiMinus size={30} cursor='pointer' className='plusIcon' style={{zIndex: '10'}}
            onClick={() => setAccord2Open(!accord2Open)}/> 
            : 
            <BiPlus size={30} cursor='pointer' className='plusIcon' style={{zIndex: '10'}}
            onClick={() => setAccord2Open(!accord2Open)}/>}

            {accord2Open && (
                <p style={accordionContentStyle}>
                  Evdə, kafedə, sahildə, Azərbaycanda, xaricdə, oteldə, kənddə, həyətdə bir sözlə <br /> 
                  remote iş götürüb istədiyiniz məkandan çalışın!  Bu sizi daha çox ruhlandıracaq!😎 <br />
                </p>
              )}
          </section>

          <section className={`accord3 ${accord3Open ? 'openAccordion' : ''}`} style={{position: 'relative'}}>
            <h5 style={{paddingLeft: '3rem', zIndex: '10',visibility: accord3Open ? "hidden" : ""}}>İş tapmaq</h5>
            {accord3Open ? 
            <BiMinus size={30} cursor='pointer' className='plusIcon' style={{zIndex: '10'}}
            onClick={() => setAccord3Open(!accord3Open)}/> 
            : 
            <BiPlus size={30} cursor='pointer' className='plusIcon' style={{zIndex: '10'}}
            onClick={() => setAccord3Open(!accord3Open)}/>}
            {accord3Open && (
                <p style={accordionContentStyle}>
                  İş tapmaq digər yerlərdə çətin ola bilər. Ölkəmizdə Freelancer səhifələri yetərincə azdır. 
                  Artıq digər dilini bilmədiyiniz səhifələrə ehtiyacınız yoxdur. Öz dilimizdən, öz irqimizdən! <br />
                </p>
              )}
          </section>

          <section className={`accord4 ${accord4Open ? 'openAccordion' : ''}`} style={{position: 'relative'}}>
            <h5 style={{paddingLeft: '3rem', zIndex: '10', visibility: accord4Open ? 'hidden' : ""}}>İşçİ tapmaq</h5>
            {accord4Open ? 
            <BiMinus size={30} cursor='pointer' className='plusIcon' style={{zIndex: '10'}}
            onClick={() => setAccord4Open(!accord4Open)}/> 
            : 
            <BiPlus size={30} cursor='pointer' className='plusIcon' style={{zIndex: '10'}}
            onClick={() => setAccord4Open(!accord4Open)}/>}
            {accord4Open && (
                <p style={accordionContentStyle}>
                  Əgər sən müdürsənsə yaxud sənə usta lazımdırsa ya da hər hansı peşəkar, o zaman <br /> 
                  onu da PullWork'dən tapa bilərsən! 😎 <br />
                </p>
              )}
          </section>

        </div>
      </div>
      <div className='cover'>
          <img src="../Images/karikatura.png" alt="walp" width={500} height={330}/>
      </div>
    </div>
  )
}

export default ContainerTop