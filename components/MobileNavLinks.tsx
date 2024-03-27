import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { useAuth0 } from '@auth0/auth0-react';

const MobileNavLinks = () => {
    const { logout, user } = useAuth0();
  return (
    <div>
      <Link href={'/order-status'} className='flex mb-2 bg-white items-center font-bold hover:text-orange-500'>
        Order Status 
      </Link>
      <Link href={'/manage-restaurant'} className='flex mb-2 bg-white items-center font-bold hover:text-orange-500'>
        My Restaurant 
      </Link>
      <Link href={'/user-profile'} className='flex mb-2 bg-white items-center font-bold hover:text-orange-500'>
        User Profile 
      </Link>
      <Link href={'/manage-restaurant'} className='flex mb-2 bg-white items-center font-bold hover:text-orange-500'>
      Manage Restaurant 
      </Link>
      <Button onClick={() => logout()} className='flex items-center px-3 font-bold hover:bg-gray-500'>
        Log Out
      </Button>
    </div>
  )
}

export default MobileNavLinks
