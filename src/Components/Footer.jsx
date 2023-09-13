import React from 'react'

function Footer() {
  return (
    <footer className='mt-[4rem] flex flex-col items-center gap-[2rem]'>
      <div className='flex items-center gap-[6rem] max-md:gap-[2rem] max-s1:gap-[1rem] max-s2:flex-wrap max-s2:justify-center'>
        <a href="" className='shadow-md'>
          <img className='py-2 px-11 rounded-lg border-[0.125rem] border-[#1e7f1436] w-[7.2rem] max-md:px-10' src="/src/assets/Images/github.svg" alt="" />
        </a>
        <a href="" className='shadow-md'>
          <img className='py-2 px-11 rounded-lg border-[0.125rem] border-[#1e7f1436] w-[7.2rem]' src="/src/assets/Images/twitter.svg" alt="" />
        </a>
        <a href="" className='shadow-md'>
          <img className='py-2 px-11 rounded-lg border-[0.125rem] border-[#1e7f1436] w-[7.2rem]' src="/src/assets/Images/instagram.svg" alt="" />
        </a>
        <a href="" className='shadow-md'>
          <img className='py-2 px-11 rounded-lg border-[0.125rem] border-[#1e7f1436] w-[7.2rem]' src="/src/assets/Images/whatsapp.svg" alt="" />
        </a>
      </div>
      <p className='text-w05 text-base mb-[2rem]'>© Copyright GrasSport - 2023</p>
    </footer>
  )
}

export default Footer