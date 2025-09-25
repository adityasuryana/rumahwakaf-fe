import { CarouselDemo } from '@/components/carousel'
import Footer from '@/components/footer'
import Langganan from '@/components/langganan'
import Navbar from '@/components/navbar'
import { Card } from '@/components/ui/card'
import { dataBanner, dataProgram } from '@/lib/dataLandingPage'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar />
      <div>
        <CarouselDemo banner={dataBanner} size={"object-cover"} />
      </div>

      <div className='container mx-auto mt-10'>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 gap-10'>
          
          <Card className='bg-green-w text-white p-5 rounded-[24px]'>
            <div className='grid grid-cols-2 gap-4 items-center h-full'>
              <div className='flex justify-center'>
                <Image src="/e-Wakaf.png" width={120} height={120} alt="icon wakaf" />
              </div>
              <div className='flex flex-col justify-center'>
                <h1 className='text-orange-w text-3xl font-semibold mb-2'>e-Wakaf</h1>
                <p className='text-sm'>Anda bisa menunaikan wakaf dengan mudah, kapanpun & dimanapun melalui elektronik wakaf</p>
              </div>
            </div>
          </Card>

          <Card className='bg-green-w text-white p-5 rounded-[24px]'>
            <div className='grid grid-cols-2 gap-4 items-center h-full'>
              <div className='flex justify-center'>
                <Image src="/e-Wakaf.png" width={120} height={120} alt="icon wakaf" />
              </div>
              <div className='flex flex-col justify-center'>
                <h1 className='text-orange-w text-3xl font-semibold mb-2'>waqf.id</h1>
                <p className='text-sm'>Semua orang bisa wakaf. Mulai dari 10ribu Anda bisa menunaikan wakaf setiap harinya</p>
              </div>
            </div>
          </Card>

          <Card className='bg-green-w text-white p-5 rounded-[24px]'>
            <div className='grid grid-cols-2 gap-4 items-center h-full'>
              <div className='flex justify-center'>
                <Image src="/e-Wakaf.png" width={120} height={120} alt="icon wakaf" />
              </div>
              <div className='flex flex-col justify-center'>
                <h1 className='text-orange-w text-3xl font-semibold mb-2'>Rekening Wakaf</h1>
                <p className='text-sm'>Transfer wakaf melalui rekening kesayangan Anda.</p>
              </div>
            </div>
          </Card>
        </div>

        <div className='my-10'>
          <h2 className='text-md flex font-bold justify-center mb-2'>Peta Wilayah</h2>
          <h1 className='text-3xl flex justify-center text-green-w font-semibold mb-2'>SEBARAN PROGRAM</h1>
          <p className='flex justify-center'><span className='leading-1 text-orange-w bg-orange-w  text-underline'>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span></p>
          
          <div className='rounded-[24px] overflow-hidden'>
            <CarouselDemo banner={dataProgram} size={"object-contain"} className="bg-contain shadow-[0px 2px 18px 0px]" />
          </div>
        </div>

        <div className='mt-10'>
          <h2 className='text-md flex font-bold justify-center mb-2'>Waqf Impacts</h2>
          <h1 className='text-2xl flex justify-center text-green-w font-semibold mb-2'>Luar Biasa Dampak</h1>
          <h1 className='text-5xl mt-[-15px] flex justify-center text-green-w font-semibold mb-1'>Manfaat Wakaf</h1>
          <p className='flex justify-center'><span className='leading-1 text-orange-w bg-orange-w  text-underline'>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span></p>

          <p className="lg:mx-20 text-center text-lg text-[18px] mt-5 leading-6">Wakaf tak hanya bermanfaat <span className='font-bold'>bagi wakif yang menunaikan</span>, wakaf juga bermanfaat bagi <span className='font-bold'>masyarakat luas</span> hingga membantu <span className='font-bold'>pembangunan yang berkelanjutan bagi negara</span>. Masih terbuka banyak peluang lainnya untuk tunaikan wakaf dan bahagiakan sesama…</p>

          <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 gap-10 my-10'>
          
          <Card className='bg-green-w text-white p-5 rounded-[24px]'>
            <div className='items-center justify-center h-full'>
              <div className='flex flex-col justify-center'>
                <h1 className='self-center text-white text-4xl justify-center font-bold mb-2'>163.361</h1>
                <p className='text-md self-center'>Penerima Manfaat Mauquf ‘Alaih</p>
              </div>
            </div>
          </Card>

          <Card className='bg-green-w text-white p-5 rounded-[24px]'>
            <div className='items-center h-full'>
              <div className='flex flex-col justify-center'>
                <h1 className='self-center justify-center text-white text-4xl font-bold mb-2'>11.345</h1>
                <p className='text-md self-center'>Wakif & Donatur</p>
              </div>
            </div>
          </Card>

          <Card className='bg-green-w text-white p-5 rounded-[24px]'>
            <div className='items-center h-full'>
              <div className='flex flex-col justify-center'>
                <h1 className='self-center text-white text-4xl font-bold mb-2'>520</h1>
                <p className='text-md self-center'>Mitra Implementasi Program Wakaf</p>
              </div>
            </div>
          </Card>
        </div>
    
        </div>

        <div className='my-10 justify-items-center'>
          <h2 className='text-xl flex font-bold justify-center mb-2'>Selaras dengan Tujuan Pembangunan Berkelanjutan (SDGs):</h2>
          <Image className='justify-center' src="/sdg.png" width={1200} height={400} alt="icon wakaf" />
        </div>

        <Langganan />


      </div>

      <Footer />
    </div>
  )
}
export default page