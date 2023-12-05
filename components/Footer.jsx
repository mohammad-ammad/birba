'use client'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-[#f8f8f8] min-h-[100px] hidden md:flex justify-center items-center flex-col py-5'>
        <div>
            <Image src="/assets/footer.png" alt='footer' width={40} height={60}/>
        </div>
        <p className='text-sm text-[#8B8B8B]'>Copyright © 2023 <span className='text-black font-semibold'>Birba</span></p>
    </footer>
  )
}

export default Footer