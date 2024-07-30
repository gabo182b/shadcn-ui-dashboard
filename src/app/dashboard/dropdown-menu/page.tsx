'use client'
import { useState } from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

export default function Page () {
  const [item, setItem] = useState('')
  return (
    <div className='flex flex-col justify-center items-center gap-4'>
      <DropdownMenu>
        <DropdownMenuTrigger>Open</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => setItem('Profile')}>Profile</DropdownMenuItem>
          <DropdownMenuItem onClick={() => setItem('Billing')}>Billing</DropdownMenuItem>
          <DropdownMenuItem onClick={() => setItem('Team')}>Team</DropdownMenuItem>
          <DropdownMenuItem onClick={() => setItem('Subscription')}>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <p>Selected item: {item}</p>
    </div>
  )
}
