import React from 'react';

import img3 from '../Assets/avatar-anisha.png'

import img4 from '../Assets/avatar-ali.png'

import img5 from '../Assets/avatar-richard.png'


 const Testimonials = ()=> {
  return (
    <div className='flex flex-col mt-24 md:flex-row md:space-x-6'>
        <div className='flex flex-col items-center p-6 space-y-6
        rounded-lg bg-veryLightGray md:w-1/3'>
            <img src={img3} alt='image' className='w-16 -mt-14'/>
            <h5 className='text-lg font-bold '>Anisha Lee</h5>
            <p className='text-sm text-darkGrayishBlue'>
                "Manage has superchanged our teams's workflow.
                The ability to maintain visibility on larger milestones 
                at all times keep everyone motivated."
            </p>
        </div>

        <div className='flex flex-col items-center p-6 space-y-6
        rounded-lg bg-veryLightGray md:w-1/3'>
            <img src={img4} alt='image' className='w-16 -mt-14'/>
            <h5 className='text-lg font-bold '>Ali Bravo</h5>
            <p className='text-sm text-darkGrayishBlue'>
                "We have been able to cancel so many other transactions since using Manage.
                There is no more cross-channel confusion and everyone is much more focused."
            </p>
        </div>

        <div className='flex flex-col items-center p-6 space-y-6
        rounded-lg bg-veryLightGray md:w-1/3'>
            <img src={img5} alt='image' className='w-16 -mt-14'/>
            <h5 className='text-lg font-bold '>Richard Watts</h5>
            <p className='text-sm text-darkGrayishBlue'>
                "Manage has superchanged our teams's workflow.
                The ability to maintain visibility on larger milestones 
                at all times keep everyone motivated."
            </p>
        </div>
    </div>
  )
}

export default Testimonials;