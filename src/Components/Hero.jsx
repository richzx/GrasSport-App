import React from 'react'
import Movil from './../assets/Images/movil.svg'
import App from './../assets/Images/the-app.png'

function Hero() {
  return (
    <main id='home' className='flex mt-10 w-full sm:justify-center sm:items-center'>
      <section className='flex items-center flex-col-reverse gap-5 sm:flex-row sm:max-w-xl sm:justify-center sm:items-center md:max-w-2xl md:gap-7 lg:max-w-3xl lg:gap-12 xl:max-w-4xl xl:gap-16'>
        <section className=' flex flex-col items-center gap-4'>
          <div className='flex flex-col gap-2 px-4'>
            <h1 className='text-[1.3rem] text-w06 text-center lg:text-[1.5rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
            <p className='text-[0.98rem] text-app10 text-center lg:text-[1rem]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi unde suscipit quam porro? Pariatur, ipsum. Enim aliquam nisi cum doloribus. ipsum. Enim aliquam nisi cum doloribus ipsum. Enim aliquam nisi cum doloribus!</p>
          </div>
          <a  className='flex items-center gap-2 py-3 px-8 bg-app07 rounded-full shadow-md cursor-pointer transition duration-200 hover:bg-[#018001]' href="#" download>
            <img className='w-5' src={Movil} alt="logo android" />
            <p className='text-lg text-w07'>Descargar App</p>
          </a>
        </section>
        <img className='w-[270px]' src={App} alt="imagen de la app" />
      </section>
    </main>
  )
}

export default Hero