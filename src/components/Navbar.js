import React from 'react';
import logo1 from '../Assets/logo.svg';


const Navbar =() => {


  return (

    <div className='relative header container mx-auto p-6 '>
       
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
                className='hidden px-6 py-3 pt-2 text-white bg-brightRed rounded-full baseline 
                hover:bg-darkGrayishBlue md:block'>Get Started</a>

                <button id='menu-btn' className='block hamburger md:hidden focus:ouline-none'>
                    <span className='hamburger-top'></span>
                    <span className='hamburger-middle'></span>
                    <span className='hamburger-bottom'></span>
                </button>
           </div>

           <div className='md:hidden'>
              <div id='menu' className='absolute flex-col items-center
              self-end hidden py-8 mt-10 space-y-6 font-bold bg-white 
              sm:w-auto sm:self-center left-6 right-6 drop-shadow-md'>
              <a href='#'>Pricing</a>
              <a href='#'>Products</a>
              <a href='#'>About Us</a>
              <a href='#'>Careers</a>
              <a href='#'>Community</a>
              </div>
           </div>
    </div>
  )
}

export default Navbar;