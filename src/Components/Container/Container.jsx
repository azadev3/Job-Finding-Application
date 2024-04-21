import React, { } from 'react'
import '../Container/Container.scss'
import ContainerTop from '../../Uitils/HomePageUitils/Container/ContainerUitils/ContainerTop'
import ContainerCenter from '../../Uitils/HomePageUitils/Container/ContainerUitils/ContainerCenter'
import ContainerBottom from '../../Uitils/HomePageUitils/Container/ContainerUitils/ContainerBottom'


const Container = () => {

  return (
    <div className='container-homepage'>
      <ContainerTop />
      <ContainerBottom />
      <ContainerCenter />
    </div>
  )
}  

export default Container;
