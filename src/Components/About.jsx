import React from 'react'

function About() {
  return (
    <main id='about' className='mt-[4rem] w-full flex justify-center items-center'>
      <section className='flex flex-col justify-center items-center gap-[2.5rem] p-9 w-[70rem] rounded-3xl border-[0.2rem] border-[#1e7f1436] shadow-md max-xl:w-[50rem] max-md:w-[40rem] max-s1:w-[30rem] max-s2:w-[23rem]'>
        <div className='flex flex-col items-center gap-[0.3rem]'>
          <h1 className='text-[2rem] text-app09 text-center max-md:text-[1.5rem] max-s1:text-[1.3rem]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h1>
          <p className='text-[1.2rem] text-app10 text-center w-[50rem] max-xl:w-[40rem] max-md:text-[1rem] max-md:w-[30rem] max-s1:text-[1rem] max-s1:w-[24rem] max-s2:w-[18rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi odit magnam asperiores suscipit dicta hic temporibus fuga quasi optio repellendus. Eius deleniti odio eligendi commodi?</p>
        </div>
        <section className='flex gap-[1.5rem] max-xl:w-[43.75rem] max-xl:flex-wrap max-xl:justify-center max-sm:flex-nowrap max-sm:flex-col max-sm:items-center'>
          <div className='flex flex-col gap-[0.2rem] bg-[#0720040a] shadow-lg rounded-3xl p-5'>
            <h1 className='text-[1.2rem] text-app09 text-center max-md:w-[14rem]'>Lorem ipsum dolor sit amet.</h1>
            <p className='text-[1.1rem] text-w05 text-center w-[17rem] max-md:w-[14rem] max-md:text-[1rem]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit illo distinctio quaerat.</p>
          </div>
          <div className='flex flex-col gap-[0.2rem] bg-[#0720040a] shadow-lg rounded-3xl p-5'>
            <h1 className='text-[1.2rem] text-app09 text-center max-md:w-[14rem]'>Lorem ipsum dolor sit amet.</h1>
            <p className='text-[1.1rem] text-w05 text-center w-[17rem] max-md:w-[14rem] max-md:text-[1rem]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit illo distinctio quaerat.</p>
          </div>
          <div className='flex flex-col gap-[0.2rem] bg-[#0720040a] shadow-lg rounded-3xl p-5'>
            <h1 className='text-[1.2rem] text-app09 text-center max-md:w-[14rem]'>Lorem ipsum dolor sit amet.</h1>
            <p className='text-[1.1rem] text-w05 text-center w-[17rem] max-md:w-[14rem] max-md:text-[1rem]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit illo distinctio quaerat.</p>
          </div>
        </section>
      </section>
    </main>
  )
}

export default About