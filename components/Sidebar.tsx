'use client'

import React from 'react'
import Link from 'next/link';
import { FaUsers } from 'react-icons/fa';
import { IoPricetagsOutline } from 'react-icons/io5';
import { RiHomeSmileLine } from "react-icons/ri";
import { usePathname } from 'next/navigation';

function Sidebar() {
    
    const route = usePathname()
    const navLinks = [
        {
            title : 'Home',
            icon : <RiHomeSmileLine />,
            path: '/dashboard'
        },
        {
            title : 'Invoices',
            icon : <IoPricetagsOutline />,
            path : '/dashboard/invoices'
        },
        {
            title : 'Customers',
            icon: <FaUsers />,
            path : '/dashboard/customers'
        }
    ]
  return (
    <div>
      <ul className='space-y-1 p-4'>
        {
            navLinks.map((itm: any, index: number) => (
                <Link href={itm.path} key={index} className={`flex items-center gap-2 px-12 py-1 hover:bg-gray-50 rounded-sm ${route === itm.path ? 'bg-gray-50 text-black' : 'bg-none text-gray-500'}`}>
                    <span>{itm.icon}</span>
                    <span>{itm.title}</span>
                </Link>
            ))
        }
      </ul>
    </div>
  )
}

export default Sidebar
