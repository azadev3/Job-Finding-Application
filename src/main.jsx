import React, { useContext, useRef } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '../src/index.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { InformationContextProvider } from './Contexts/HeaderInformationContext.jsx'
import SearchWork from './Pages/SearchWorkPage/SearchWork.jsx'
import Header from './Components/Header/Header.jsx'
import { SearchWorkContextProvider } from './Contexts/SearchWorkContext.jsx'
import Portfolio from './Pages/UserPortfolio/Portfolio.jsx'
import Options from './Pages/UserPortfolio/PortfoliOptions/Options.jsx'
import Fragman from './Uitils/LogRegUitil/Fragman.jsx'
import RegisterForm from './Pages/LoginRegister/RegisterForm.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    
    <BrowserRouter>
  <InformationContextProvider>
      <SearchWorkContextProvider>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/searchwork' element={<React.Fragment><Header /><SearchWork /></React.Fragment>} />
      <Route path='/portfolio' element={<React.Fragment><Header /><Portfolio /></React.Fragment>} />
      <Route path='/portfolio/settings' element={<React.Fragment><Header /><Options /></React.Fragment>} />
      <Route path='/register/select' element={<Fragman />} />
      <Route path='/login/select' element={<Fragman />} />
      <Route path='/registerform' element={<RegisterForm />} />
    </Routes>
      </SearchWorkContextProvider>
  </InformationContextProvider>
</BrowserRouter>

)
