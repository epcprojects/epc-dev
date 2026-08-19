"use client"
import React from 'react'
import Image from 'next/image'
import { Images } from '../ui'
import { ArrowUpIcon } from '@/public/icons'
const Header = () => {
  return (
    <header className='sticky top-0 z-50 pt-10.5 container max-w-7xl mx-auto px-8 flex flex-row justify-between items-center'>
           <Image src={Images.landingImages.Logo} alt={'Endpoint clients logo'}/>
            <button onClick={()=>{""}} className='bg-linear-to-r from-purple-blue via-medium-purple to-purple-blue py-3 px-4.5 rounded-xl flex flex-row items-center gap-3'>
             <p className='text-lg font-medium text-desert-storm'>Get a Free Consultation</p>
             <ArrowUpIcon/>
            </button>
    </header>
  )
}

export default Header
