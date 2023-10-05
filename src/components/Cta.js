import React from 'react'

 const Cta = () => {
  return (
    <div className='bg-brightRed'>
    <div className='container flex flex-col items:center justify-between
    px-6 py-24 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0'>
        <h2 className='text-5xl text-white leading-tight font-bold text-center md:text-4xl 
        md:max-w-xl md:text-left'>
            Simplify how your team works today
        </h2>
        <div>
                 <a
                href='#'
                class=" ml-32 p-3 px-6 pt-2 
                text-brightRed bg-white rounded-full shadow-2xl baseline hover:bg-gray-900 md:ml-0">Get Started</a>
        </div> 
    </div>

</div>
      
  )
}

export default Cta;
