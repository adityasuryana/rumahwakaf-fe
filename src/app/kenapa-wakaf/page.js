import Footer from '@/components/footer'
import Langganan from '@/components/langganan'
import Navbar from '@/components/navbar'
import Image from 'next/image'
import React from 'react'


export const metadata = {
  title: 'Kenapa Wakaf - Rumah Wakaf',
}

const page = () => {
    
  return (
    
    <div>
        <Navbar />
        <div>
            <Image src="/kenapawakaf.png" width={1920} height={600} alt="Kenapa Wakaf" className='w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover'/>
        </div>

        <div className='container  mx-auto my-10'>
            <h1 className='text-4xl text-center font-extrabold text-green-w mb-3'><span className='text-orange-w'>Kenapa</span> <span className='text-green-w'>wakaf?</span></h1>
            <p className='text-md font-semibold text-center'>Secara etimologis, wakaf mempunyai arti menghentikan atau menahan</p>
            <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 gap-10 mx-20 mt-10'>
                <div className='flex flex-col items-center text-center'>
                    <div>
                        <img src="/kenw1.jpeg" alt="Kenapa Wakaf" className='w-70 h-50 mb-5 rounded-lg object-cover'/>
                    </div>
                    <h2 className='text-xl font-semibold mb-2'>Dasar Hukum</h2>
                    <p className='text-sm text-justify'>Wakaf adalah perbuatan hukum wakif (pihak yang mewakafkan harta benda miliknya) untuk dimanfaatkan selamanya/ untuk jangka waktu tertentu sesuai dengan kepentingannya guna keperluan ibadah dan/atau kesejahteraan umum menurut syariah.</p>
                </div>
                <div className='flex flex-col items-center text-center'>
                    <img src="/kenw2.jpeg" alt="Kenapa Wakaf" className='w-70 h-50 mb-5 rounded-lg object-cover'/>
                    <h2 className='text-xl font-semibold mb-2'>Dalil Syar'i</h2>
                    <p className='text-sm text-justify'>“Jika anak adam meninggal dunia maka amalnya terputus kecuali tiga perkara; sedekah jariyah, ilmu yang bermanfaat, atau anak sholeh yang mendoakannya.”
(HR Muslim No.1631)</p>
                </div>
                <div className='flex flex-col items-center text-center'>
                    <img src="/kenw3.jpeg" alt="Kenapa Wakaf" className='w-70 h-50 mb-5 rounded-lg object-cover'/>
                    <h2 className='text-xl font-semibold mb-2'>Hukum Wakaf</h2>
                    <p className='text-sm text-justify'>Wakaf adalah bentuk investasi sosial yang dapat meningkatkan kesejahteraan masyarakat dan mengurangi kemiskinan.</p>
                </div>
                <div className='flex flex-col items-center text-center'>
                    <img src="/kenw4.jpeg" alt="Kenapa Wakaf" className='w-70 h-50 mb-5 rounded-lg object-cover'/>
                    <h2 className='text-xl font-semibold mb-2'>Urgensi Wakaf</h2>
                    <p className='text-sm text-justify'>Wakaf merupakan warisan yang abadi dan dapat memberikan manfaat jangka   panjang bagi generasi mendatang.</p>
                </div>
            </div>
        </div>
        <Langganan />

        <Footer />
    </div>
  )
}

export default page