"use client"

import React from 'react'
import { Card, CardContent } from './ui/card'

const Langganan = () => {
  return (
    <div>
        <Card className={"bg-green-w xl:w-3/5 p-5 rounded-[24px] mx-auto py-15"}>
            <CardContent className='text-center'>
                <h2 className='text-3xl font-extrabold mb-2 text-orange-w'>INGIN TAHU DAMPAK WAKAF ANDA?</h2>
                <h2 className='text-md justify-center font-bold text-white'>Kami ceritakan kisah dari dampak kebaikan wakaf yang Anda tunaikan.</h2>

                <div className='flex justify-center mt-5'>
                    <input type="email" placeholder='Masukkan email Anda' className='bg-white p-3 rounded-l-md w-1/2 focus:outline-none' />
                    <button className='bg-orange-w text-white p-3 rounded-r-md font-semibold hover:bg-green-w hover:text-orange-w cursor-pointer transition-colors duration-300'>Langganan</button>
                </div>
            </CardContent>
        </Card>
    </div>
  )
}

export default Langganan