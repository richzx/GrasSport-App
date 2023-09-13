import React from 'react'

function Contact() {
  return (
    <section id='contact' className='mt-[4rem] flex justify-center w-full'>
      <section className='flex flex-col justify-center items-end gap-[1.25rem] px-4'>
        <div className='flex flex-col gap-3'>
          <div className='flex flex-col gap-5 md:flex-row'>
            <input className='focus:outline-none bg-[#0720040a] text-w05 p-4 min-[300px]:w-[250px] min-[350px]:w-[310px] rounded-lg shadow-md sm:w-[400px] md:w-[300px]' id="nombre" type="text" placeholder="Nombre"/>
            <input className='focus:outline-none bg-[#0720040a] text-w05 p-4 min-[300px]:w-[250px] min-[350px]:w-[310px] rounded-lg shadow-md sm:w-[400px] md:w-[300px]' id="apellido" type="text" placeholder="Apellido"/>
          </div>
          <textarea className='focus:outline-none bg-[#0720040a] text-w05 w-full h-56 align-text-top p-4 rounded-lg resize-none shadow-md' type="text" placeholder="Mensaje" name="mensaje" id="mensaje" cols="10" rows="2"></textarea>
        </div>
        <a className='bg-app07 py-1 px-6 text-w07 rounded-full transition duration-200 hover:bg-[#018001]' href="">Enviar</a>
      </section>
    </section>
  )
}

export default Contact