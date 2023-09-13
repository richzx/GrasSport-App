import React from 'react'
import Github from '../assets/Images/github.svg'
import Twitter from '../assets/Images/twitter.svg'
import Instagram from '../assets/Images/instagram.svg'
import Whatsapp from '../assets/Images/whatsapp.svg'

function Footer() {
  return (
    <footer className='mt-[4rem] flex flex-col items-center gap-[2rem] px-4'>
      <div className='flex justify-center gap-4 flex-wrap md:gap-6 lg:gap-10'>
        <a href="" className='shadow-md'>
          <img className='py-2 px-11 rounded-lg border-[0.125rem] border-[#1e7f1436] w-[7.2rem]' src={Github} alt="logo-github" />
        </a>
        <a href="" className='shadow-md'>
          <img className='py-2 px-11 rounded-lg border-[0.125rem] border-[#1e7f1436] w-[7.2rem]' src={Twitter}  alt="logo-twitter" />
        </a>
        <a href="" className='shadow-md'>
          <img className='py-2 px-11 rounded-lg border-[0.125rem] border-[#1e7f1436] w-[7.2rem]' src={Instagram}  alt="logo-instagram" />
        </a>
        <a href="" className='shadow-md'>
          <img className='py-2 px-11 rounded-lg border-[0.125rem] border-[#1e7f1436] w-[7.2rem]' src={Whatsapp}  alt="logo whatsapp" />
        </a>
      </div>
      <p className='text-w05 text-base mb-[2rem]'>© Copyright GrasSport - 2023</p>
    </footer>
  )
}

export default Footer