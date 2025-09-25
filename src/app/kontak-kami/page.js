import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import { Card } from '@/components/ui/card'
import Image from 'next/image'
import React from 'react'

export const metadata = {
  title: 'Kontak Kami - Rumah Wakaf',
}

const page = () => {
  return (
    <div>
        <Navbar />
        
        <div className='container mx-auto mt-35 mb-10'>
            <h1 className='text-3xl text-center font-bold text-green-w mb-10'>Kontak Kami</h1>

        <div className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 gap-10'>
          <div>
            <div className=''>
              <Card className='bg-green-w text-white p-5 rounded-[24px]'>
                <div className='grid grid-cols-2 gap-4 items-center h-full'>
                  <div className='flex justify-center'>
                    <iframe className='rounded-2xl' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.532961721306!2d107.63017581151249!3d-6.946280967974807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e9f13bc32baf%3A0xe83f9f7bd3ff69f8!2sRumah%20Wakaf%20Indonesia!5e0!3m2!1sen!2sid!4v1758786693104!5m2!1sen!2sid" width="200" height="200"  loading="lazy"></iframe>
                  </div>
                  <div className='flex flex-col justify-center'>
                    <h1 className='text-orange-w text-3xl font-semibold mb-2'>Alamat Kantor</h1>
                    <p className='text-sm'>Jl. Guntursari Wetan No.3, Turangga, Kec. Lengkong, Kota Bandung, Jawa Barat 40264</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          <div>
            <div className='bg-green-w p-5 rounded-[24px]'>
              <form action="" className='text-white space-y-4'>
                <div>
                  <label htmlFor="nama" className='block text-sm font-medium text-white mb-1'>Nama Lengkap</label>
                  <input type="text" id='nama' className='w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-w' placeholder='Masukkan nama lengkap Anda' />
                </div>
                <div>
                  <label htmlFor="email" className='block text-sm font-medium text-white mb-1'>Email</label>
                  <input type="email" id='email' className='w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-w' placeholder='Masukkan email Anda' />
                </div>
                <div>
                  <label htmlFor="subjek" className='block text-sm font-medium text-white mb-1'>No Telepon</label>
                  <input type="text" id='subjek' className='w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-w' placeholder='Masukkan nomor telepon Anda' />
                </div>
                <div>
                  <label htmlFor="pesan" className='block text-sm font-medium text-white mb-1'>Pesan</label>
                  <textarea id='pesan' rows="4" className='w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-w' placeholder='Tulis pesan Anda di sini'></textarea>
                </div>
                <div className='flex justify-end'>
                  <button type='submit' className='bg-orange-w text-white p-2 px-4 rounded font-semibold hover:bg-green-w hover:text-orange-w cursor-pointer transition-colors duration-300'>Kirim Pesan</button>
                </div>
              </form>

            </div>
          </div>
        </div>
            
        </div>

        <Footer />
    </div>
  )
}

export default page