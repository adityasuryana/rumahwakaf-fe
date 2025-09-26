import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import React from 'react'


export const metadata = {
  title: 'Berita - Rumah Wakaf',
}
const page = () => {
  return (
    <div>
        <Navbar />
        <div className='container mx-auto mt-35 mb-20'>
            <h1 className='text-3xl text-center font-bold text-green-w mb-10'>Berita</h1>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 gap-10'>
                <div className='flex flex-col items-center text-center'>
                    <img src="/kenw1.jpeg" alt="Berita" className='w-70 h-50 mb-5 rounded-lg object-cover'/>
                    <h2 className='text-xl font-semibold mb-2'>Judul Berita 1</h2>
                    <p className='text-sm text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className='flex flex-col items-center text-center'>
                    <img src="/kenw1.jpeg" alt="Berita" className='w-70 h-50 mb-5 rounded-lg object-cover'/>
                    <h2 className='text-xl font-semibold mb-2'>Judul Berita 2</h2>
                    <p className='text-sm text-justify'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div className='flex flex-col items-center text-center'>
                    <img src="/kenw1.jpeg" alt="Berita" className='w-70 h-50 mb-5 rounded-lg object-cover'/>
                    <h2 className='text-xl font-semibold mb-2'>Judul Berita 3</h2>
                    <p className='text-sm text-justify'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
                <div className='flex flex-col items-center text-center'>
                    <img src="/kenw1.jpeg" alt="Berita" className='w-70 h-50 mb-5 rounded-lg object-cover'/>
                    <h2 className='text-xl font-semibold mb-2'>Judul Berita 4</h2>
                    <p className='text-sm text-justify'>Excepteur sint occaecat cupidatatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className='flex flex-col items-center text-center'>
                    <img src="/kenw1.jpeg" alt="Berita" className='w-70 h-50 mb-5 rounded-lg object-cover'/>
                    <h2 className='text-xl font-semibold mb-2'>Judul Berita 5</h2>
                    <p className='text-sm text-justify'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                </div>
                <div className='flex flex-col items-center text-center'>
                    <img src="/kenw1.jpeg" alt="Berita" className='w-70 h-50 mb-5 rounded-lg object-cover'/>
                    <h2 className='text-xl font-semibold mb-2'>Judul Berita 6</h2>
                    <p className='text-sm text-justify'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos.</p>
                </div>
            </div>
        </div>

        <Footer />
    </div>
  )
}

export default page