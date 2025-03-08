import React from 'react'
import FirstComp from './FooterComponents/FirstComp'
import SecondComp from './FooterComponents/SecondComp'
import ThirdComp from './FooterComponents/ThirdComp'

const Footer = () => {
  return (
<section className='w-full bg-[#F2F2F2] py-12 md:pb-16 md:pt-24'>
  <div className='w-full max-w-[1550px] mx-auto flex flex-col '>
    <FirstComp/>
    <SecondComp/>
    <ThirdComp/>

  </div>
</section>  )
}

export default Footer