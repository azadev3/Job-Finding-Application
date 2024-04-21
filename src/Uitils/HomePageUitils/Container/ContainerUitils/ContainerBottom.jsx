import React from 'react'
import { MdWorkspacesOutline } from 'react-icons/md'
import { Link } from 'react-router-dom'

const ContainerBottom = () => {
  return (
    <div className='container-homepage-bottom-area'>
       <div> 
          <img src="./Images/bottomImage.jpg" width={500} height={450} style={{borderRadius: '40px'}}/>
       </div>

       <section className='titles'>
        <section className='info'>
          <h1 id='title-main' 
          style={{display: 'flex', alignItems: 'center'}}>
            <MdWorkspacesOutline size={22} style={{paddingRight: '1rem'}}/> 
            ƏSAS MƏQSƏDİMİZ
          </h1>
          <p style={{padding: '10px'}}>Buradakı əsas məqsəd, həm iş təklif edənlərin, həm də iş götürənlərin təhlükəsizliyini qorumaqdır.
           Qısaca desək Azərbaycanda Freelancer olmaq istəyirsinizsə sizə bunun üçün daha təhlükəsiz və düzgün yol açırıq.
           
          </p>
        </section>

        <article className='register-login-info-titles'>
          <label>Hesabın varsa buna 👇</label>
          <Link to='/login/select'>
          <button id='loginBtn'>GİRİŞ</button>
          </Link>

          <label>Yoxdursa buna bas 👇</label>
          <Link to='/register/select'>
          <button id='registerBtn'>QEYDİYYAT</button>
          </Link>
        </article>

       </section>
    </div>
  )
}

export default ContainerBottom