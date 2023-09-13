import React from 'react'
import Movil from './../assets/Images/movil-green.svg'

function Header() {
  return (
    <header className='w-full top-0 left-0 shadow'>
      <section className='flex justify-center items-center py-3 sm:justify-evenly'>
        <nav className='flex lg:items-center lg:gap-32'>
          <h1 className='text-2xl'>GrasSport</h1>
          <nav className='hidden gap-8 lg:flex'>
            <a className='text-base text-app09 hover:text-app08' href="#home">Home</a>
            <a className='text-base text-app09 hover:text-app08' href="#about">About</a>
            <a className='text-base text-app09 hover:text-app08' href="#contact">Contact</a>
          </nav>
        </nav>
        <a href="/src/assets/Images/github.svg" download className='hidden items-center gap-2 py-2 px-8 bg-w07 rounded-full shadow-md cursor-pointer transition duration-200 hover:bg-slate-100 sm:flex'>
          <img src={Movil} alt="logo android" />
          <p className='text-lg text-app07'>Descargar App</p>
        </a>
      </section>
    </header>
  )
}

export default Header