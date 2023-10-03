import React from 'react';
import logo1 from '../Assets/logo.svg';


const Navbar =() => {
  return (

    <div className='relative container mx-auto p-6 '>
       
            <div className='flex items-center justify-between'>
                <div className='pt-2'>
                    <img src={logo1} alt='logo'/>
                </div>

                <div className='hidden space-x-6 md:flex'>
                    <a href='#' className='hover:text-darkGrayishBlue'>Pricing</a>
                    <a href='#' className='hover:text-darkGrayishBlue'>Product</a>
                    <a href='#' className='hover:text-darkGrayishBlue'>About Us</a>
                    <a href='#' className='hover:text-darkGrayishBlue'>Career</a>
                    <a href='#' className='hover:text-darkGrayishBlue'>Community</a>
                </div>

                <a
                href='#'
                className='hidden px-6 py-3 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-darkGrayishBlue md:block'>Get Started</a>

           </div>
    </div>
  )
}

export default Navbar;