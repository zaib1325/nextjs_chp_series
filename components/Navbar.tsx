import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div className='w-full text-star px-2'>
      <Link href={'/'}>This is A NavBar</Link>
    </div>
  )
}

export default Navbar
