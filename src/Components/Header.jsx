import React from 'react'

function Header() {
  return (
    <header className='w-full flex items-center justify-around py-4 bg-w07 shadow fixed'>
      <nav className='flex items-center gap-14'>
        <h1 className='text-3xl text-app09 font-medium'>GrasSport</h1>
        <nav className='flex items-center gap-6 max-sm:hidden'>
          <a className='text-lg text-w06 hover:text-app07' href="#home">Home</a>
          <a className='text-lg text-w06 hover:text-app07' href="#about">About</a>
          <a className='text-lg text-w06 hover:text-app07' href="#contact">Contact</a>
        </nav>
      </nav>
      <a href="/src/assets/Images/github.svg" download className='flex items-center gap-2 py-2 px-8 bg-w07 rounded-full shadow-md cursor-pointer transition duration-200 hover:bg-slate-100'>
        <img src="/src/assets/Images/movil-green.svg" alt="" />
        <p className='text-lg text-app07'>Descargar App</p>
      </a>
    </header>
  )
}

export default Header