import React from 'react'

function Contact() {
  return (
    <section id='contact' className='mt-[4rem] flex justify-center'>
      <section className='flex flex-col items-end gap-[1.25rem]'>
        <div className='flex flex-col gap-3'>
          <div className='flex gap-5 max-s2:flex-col'>
            <input className='focus:outline-none bg-[#0720040a] text-w05 p-4 w-[360px] rounded-lg shadow-md max-md:w-[250px] max-s2:w-[350px]' id="nombre" type="text" placeholder="Nombre"/>
            <input className='focus:outline-none bg-[#0720040a] text-w05 p-4 w-[360px] rounded-lg shadow-md max-md:w-[250px] max-s2:w-[350px]' id="apellido" type="text" placeholder="Apellido"/>
          </div>
          <textarea className='focus:outline-none bg-[#0720040a] text-w05 w-full h-56 align-text-top p-4 rounded-lg resize-none shadow-md' type="text" placeholder="Mensaje" name="mensaje" id="mensaje" cols="10" rows="2"></textarea>
        </div>
        <a className='bg-app07 py-1 px-6 text-w07 rounded-full transition duration-200 hover:bg-[#018001]' href="">Enviar</a>
      </section>
    </section>
  )
}

export default Contact