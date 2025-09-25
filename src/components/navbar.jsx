"use client"

import Link from 'next/link'
import React, { useState } from 'react'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <div 
      className={`w-full justify-between items-center p-5 py-8 fixed top-0 z-50 transition-all duration-300 ${
        isMobileMenuOpen 
          ? 'bg-white shadow-lg backdrop-blur-none' 
          : 'backdrop-blur-[1px]'
      }`}
      style={{
        background: isMobileMenuOpen 
          ? 'white' 
          : 'linear-gradient(180deg, rgba(15,22,29,0.56) 0%, rgba(15,22,29,0) 100%)'
      }}
    >
      <div className='container mx-auto flex justify-between items-center'>
        {/* Logo */}
        <div>
          <Link href="/"><img src="/logo/rwi.png" width={"150px"} className='' alt="RWI Logo" /></Link>
        </div>

        {/* Desktop Menu */}
        <div className='hidden lg:flex gap-10 font-medium'>
          <Link className='text-white text-sm  hover:text-orange-w transition-colors duration-300' href="">KENAPA WAKAF</Link>
          <Link className='text-white text-sm hover:text-orange-w transition-colors duration-300' href="">TENTANG KAMI</Link>
          <Link className='text-white text-sm hover:text-orange-w transition-colors duration-300' href="/program">PROGRAM</Link>
          <Link className='text-white text-sm hover:text-orange-w transition-colors duration-300' href="">BERITA</Link>
          <Link className='text-white text-sm hover:text-orange-w transition-colors duration-300' href="">ARTIKEL</Link>
          <Link className='text-white text-sm hover:text-orange-w transition-colors duration-300' href="/kontak-kami">KONTAK KAMI</Link>
        </div>

        {/* Desktop WAKAF Button */}
        <div className='hidden lg:block'>
          <a href="https://rumahwakaf.org/wakaf"><button className='bg-green-w text-white p-2 px-4 rounded font-semibold hover:bg-green-w hover:text-orange-w cursor-pointer transition-colors duration-300'>WAKAF</button></a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className='lg:hidden'>
          <button 
            onClick={toggleMobileMenu}
            className={`focus:outline-none focus:text-orange-w transition-colors duration-300 ${
              isMobileMenuOpen ? 'text-gray-800' : 'text-white'
            }`}
            aria-label="Toggle mobile menu"
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Sidebar */}
      <div 
        className={`lg:hidden fixed top-0 left-0 h-full w-full transform transition-transform duration-300 ease-in-out z-40 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{
          background: 'linear-gradient(135deg, rgba(15,22,29,0.95) 0%, rgba(30,41,59,0.95) 100%)',
          backdropFilter: 'blur(10px)'
        }}
      >
        <div className='p-6 pt-8'>
          {/* Close Button */}
          <div className='flex justify-end mb-8'>
            <button 
              onClick={closeMobileMenu}
              className='text-white hover:text-orange-w focus:outline-none transition-colors duration-300'
              aria-label="Close mobile menu"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Logo di mobile menu */}
          <div className='flex justify-center mb-8'>
            <img src="/logo/rwi.png" width={"150px"} alt="RWI Logo" />
          </div>

          {/* Mobile Menu Items */}
          <div className='flex flex-col gap-8 font-medium text-center items-center'>
            <Link 
              className='text-white hover:text-orange-w transition-colors duration-300 py-3 text-xl w-full text-center border-b border-gray-700' 
              href=""
              onClick={closeMobileMenu}
            >
              KENAPA WAKAF
            </Link>
            <Link 
              className='text-white hover:text-orange-w transition-colors duration-300 py-3 text-xl w-full text-center border-b border-gray-700' 
              href=""
              onClick={closeMobileMenu}
            >
              TENTANG KAMI
            </Link>
            <Link 
              className='text-white hover:text-orange-w transition-colors duration-300 py-3 text-xl w-full text-center border-b border-gray-700' 
              href=""
              onClick={closeMobileMenu}
            >
              PROGRAM
            </Link>
            <Link 
              className='text-white hover:text-orange-w transition-colors duration-300 py-3 text-xl w-full text-center border-b border-gray-700' 
              href=""
              onClick={closeMobileMenu}
            >
              BERITA
            </Link>
            <Link 
              className='text-white hover:text-orange-w transition-colors duration-300 py-3 text-xl w-full text-center border-b border-gray-700' 
              href=""
              onClick={closeMobileMenu}
            >
              ARTIKEL
            </Link>
            <Link 
              className='text-white hover:text-orange-w transition-colors duration-300 py-3 text-xl w-full text-center border-b border-gray-700' 
              href="/kontak-kami"
              onClick={closeMobileMenu}
            >
              KONTAK KAMI
            </Link>
            
            {/* Mobile WAKAF Button */}
            <button 
              className='bg-green-w text-white p-4 px-8 rounded-lg font-semibold hover:bg-green-w transition-colors duration-300 mt-8 text-xl'
              onClick={closeMobileMenu}
            >
              WAKAF
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar