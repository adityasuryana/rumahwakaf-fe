"use client"

import React from 'react'

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

export function CarouselDemo({banner, size}) {

  if (!banner || banner.length === 0) {
    return (
      <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] bg-gray-200 flex items-center justify-center">
        <p className="text-gray-500">No images to display</p>
      </div>
    )
  }

  return (
    <Carousel className="w-full max-w-full relative group">
      <CarouselContent className="w-full ml-0">
        {banner.map((item, index) => (
          <CarouselItem key={index} className="w-full h-[400px] md:h-[500px] lg:h-[600px] relative pl-0">
            <Image
              src={item.gambar}
              fill
              className={`${size }`}
              alt={`Banner Image ${index + 1}`}
              priority={index === 0}
              onError={(e) => {
                console.error(`Failed to load image: ${item.gambar}`)
                e.target.style.display = 'none'
              }}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-4 bg-transparent border-none shadow-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white hover:bg-black/20" />
      <CarouselNext className="right-4 bg-transparent border-none shadow-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white hover:bg-black/20" />
    </Carousel>
  )
}
