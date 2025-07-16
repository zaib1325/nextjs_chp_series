import { Button } from '@/components/ui/button'
import React from 'react'
import Image from 'next/image'

function page() {
  return (
    <div className='bg-black pt-40'>
      <div className='relative w-full h-24 flex justify-end items-end bg-red-200'>
        <div className='w-20 h-20 bg-white'></div>
      </div>
      <div className='absolute top-40 bg-black h-24 w-full rounded-br-full'></div>

      <header className='text-white w-full h-full text-2xl font-semibold absolute top-0'>
        <div className='w-full h-52 flex items-center'>
          <span className='ml-14'>This is a Header</span>
        </div>
      </header>

      <main className='h-28 bg-white rounded-tl-full pt-28'>
        <div className='h-96 bg-white '>

          <section className='flex justify-evenly'>
            <section className='w-1/2 flex flex-col justify-center items-center'>
              <p className='text-gray-600'>It contains the random detail about this webpage , provided soon.</p>
              <div className='flex mt-2 gap-2'>
                <Button> Learn More</Button>
                <Button className='px-4'> Login </Button>
              </div>
            </section>
            <section className='w-1/2 flex items-center justify-center'>
              <Image className='rounded-md' src="/temp.png" alt="Placeholder" width={200} height={200} />
            </section>
          </section>
        </div>
      </main>

    </div>
  )
}

export default page
