import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import Image from 'next/image'
import React from 'react'

export const metadata = {
  title: 'Program - Rumah Wakaf',
}

const page = () => {
  return (
    <div>
        <Navbar />
        
        <div className='container mx-auto mt-35 mb-20'>
            <h1 className='text-3xl text-center font-bold text-green-w mb-5'>Program Rumah Wakaf</h1>

            <Image src="/programrw1.jpeg" width={1000} height={400} alt="program" className='place-self-center mb-10'/>
            <Image src="/programrw2.jpeg" width={1000} height={400} alt="program" className='place-self-center mb-10'/>
            <Image src="/programrw3.jpeg" width={1000} height={400} alt="program" className='place-self-center mb-10'/>
            <Image src="/programrw4.jpeg" width={1000} height={400} alt="program" className='place-self-center mb-10'/>
        </div>

        <Footer />
    </div>
  )
}

export default page