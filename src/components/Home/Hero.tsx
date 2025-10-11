import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Button } from '../ui/button'
import Image from 'next/image'
import BrandComponent from './Shared/BrandComponent'
import Link from 'next/link'

const Hero = ({ title1, title2, description, colorTitile, image, buttonName1, buttonName2, buttonHref1, buttonHref2 }: { title1: string, title2: string, description: string, colorTitile: string, image: string, buttonName1: string, buttonName2: string, buttonHref1: string, buttonHref2: string }) => {
  return (
    <div className='bg-[#EEFFFF]'>
      <div className=' container mx-auto flex flex-col md:flex-row items-center justify-between gap-10 py-10 px-5'>

        <div>
          <div>
            <div className="flex flex-row flex-wrap items-center mb-7  gap-2">
              <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
                <Avatar className='w-8 h-8'>
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar className='w-8 h-8'>
                  <AvatarImage
                    src="https://github.com/maxleiter.png"
                    alt="@maxleiter"
                  />
                  <AvatarFallback>LR</AvatarFallback>
                </Avatar>
                <Avatar className='w-8 h-8'>
                  <AvatarImage
                    src="https://github.com/evilrabbit.png"
                    alt="@evilrabbit"
                  />
                  <AvatarFallback>ER</AvatarFallback>
                </Avatar>
              </div>
              <p className='text-[#8E938F] font-normal text-[14px]'>50k+ Satisfied Customers</p>
            </div>
            <div >
              <h1 className='text-[56px] font-semibold '>{title1} <span className='text-[#147575]'>{colorTitile}</span>  {title2}</h1>
              <p className='mt-4 text-[#8E938F] text-[16px] leading-7 '>{description}</p>
              <div className='flex gap-4 mt-8'>
                <Link href={buttonHref1}>
                  <Button className='bg-[#00383B] py-3 hover:bg-[#147575] '>{buttonName1}</Button>
                </Link>
                <Link href={buttonHref2}>
                  <Button className='border border-[#00383B] bg text-[#00383B] hover:bg-transparent bg-transparent'>{buttonName2}</Button>
                </Link>

              </div>
            </div>
          </div>
        </div>
        <div>
          <Image src={image} alt="Hero Image" width={1200} height={600} className='rounded-xl h-[600px] object-cover' />
        </div>
      </div>
      <div className='bg-[#DDFFFF]   mx-auto  py-7'>
        <BrandComponent />
      </div>
    </div>
  )
}

export default Hero