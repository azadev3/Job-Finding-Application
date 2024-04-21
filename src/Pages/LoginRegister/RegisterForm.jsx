import React from 'react'
import '../LoginRegister/Pages.scss';

const RegisterForm = () => {

  return (
    <div className='register-form'>
      <div className='right'>
      </div>
      <div className='left'>
        <form onClick={e => e.preventDefault()}>
          <div className='title'>
            <h2>Nə üçün Qeydiyyat'dan keçirsən? 😎✌️</h2>
          </div>

          <div className='form-container'>
            <div className='select-area'>
              <button className='work'>İş axtarıram</button>
              <button className='worker'>İşçi axtarıram</button>
            </div>
          
          <div className='input-field'>
            <section className='label-input'>
            <label>Ad</label>
            <input type='text' />
            </section>
          </div>

          <div className='input-field'>
            <section className='label-input'>
            <label>Soyad</label>
            <input type='text' />
            </section>
          </div>

          <div className='input-field'>
            <section className='label-input'>
            <label>Email</label>
            <input type='text' />
            </section>
          </div>

          <div className='input-field'>
            <section className='label-input'>
            <label>Telefon</label>
            <input type='text' />
            </section>
          </div>
</div>
        </form>
      </div>
    </div>
  )
}

export default RegisterForm