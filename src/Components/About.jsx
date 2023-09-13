import React from 'react'

function About() {
  return (
    <main id='about' className='mt-[4rem] w-full flex justify-center items-center'>
      <section className='m-4 py-9 px-5 flex items-center flex-col gap-4 border-[.2rem] border-[#1e7f1436] rounded-2xl shadow-md'>
        <div className='flex flex-col gap-2 p-4 lg:max-w-4xl'>
          <h1 className='text-[1.3rem] text-app09 text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h1>
          <p className='text-[.98rem] text-app10 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi odit magnam asperiores suscipit dicta hic temporibus fuga quasi optio repellendus. Eius deleniti odio eligendi commodi?</p>
        </div>
        <section className='flex justify-center flex-wrap gap-5'>
          <div className='flex flex-col p-3 bg-[#0720040a] max-w-xs shadow-md rounded-xl md:max-w-[300px]'>
            <h1 className='text-[1.1rem] text-app09 text-center'>Lorem ipsum dolor sit amet.</h1>
            <p className='text-[.98rem] text-w05 text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit illo distinctio quaerat.</p>
          </div>
          <div className='flex flex-col p-3 bg-[#0720040a] max-w-xs shadow-md rounded-xl'>
            <h1 className='text-[1.1rem] text-app09 text-center'>Lorem ipsum dolor sit amet.</h1>
            <p className='text-[.98rem] text-w05 text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit illo distinctio quaerat.</p>
          </div>
          <div className='flex flex-col p-3 bg-[#0720040a] max-w-xs shadow-md rounded-xl'>
            <h1 className='text-[1.1rem] text-app09 text-center'>Lorem ipsum dolor sit amet.</h1>
            <p className='text-[.98rem] text-w05 text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit illo distinctio quaerat.</p>
          </div>
        </section>
      </section>
    </main>
  )
}

export default About