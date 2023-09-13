import React from 'react'

function Hero() {
  return (
    <main id='home' className='pt-[9rem] w-full flex justify-center items-center'>
      <section className='flex justify-center items-center gap-[9rem] max-xl:gap-[5rem] max-lg:gap-[4rem] max-sm:flex-col-reverse max-sm:gap-[2rem] max-sm:justify-center'>
        <section className='flex flex-col items-center gap-[2.25rem] w-[40rem] max-xl:w-[30rem] max-md:w-[20rem] max-sm:w-[30rem] max-s1:w-[24rem]'>
          <div className='felx flex-col gap-1'>
            <h1 className='text-[2rem] text-w06 text-center max-md:text-[1.5rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
            <p className='text-[1rem] text-app10 text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi unde suscipit quam porro? Pariatur, ipsum. Enim aliquam nisi cum doloribus. ipsum. Enim aliquam nisi cum doloribus ipsum. Enim aliquam nisi cum doloribus!</p>
          </div>
          <a  className='flex items-center gap-2 py-3 px-8 bg-app07 rounded-full shadow-md cursor-pointer transition duration-200 hover:bg-[#018001]' href="#" download>
            <img className='w-5' src="/src/assets/Images/movil.svg" alt="" />
            <p className='text-lg text-w07'>Descargar App</p>
          </a>
        </section>
        <img className='max-md:w-[18rem]' src="/src/assets/Images/the-app.png" alt="" />
      </section>
    </main>
  )
}

export default Hero