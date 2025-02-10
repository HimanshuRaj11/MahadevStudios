import Services from '@/components/serviceCard'
import React from 'react'

export default function page() {
  return (
    <div className=" bg-[url('/6923253.jpg')] w-[100%]">
      <div className="flex justify-center items-center  md:h-[45vh]">
        <h1 className='text-3xl md:text-8xl text-neutral-300 mt-32 md:mt-0 p-2 md:p-4 bg-black/30 backdrop-blur-md rounded-lg'>
          What We Provide
        </h1>
      </div>
      <Services />
    </div>
  )
}