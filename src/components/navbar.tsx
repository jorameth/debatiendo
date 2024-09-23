import React, { useState, useEffect } from 'react'
import { Navbar as MTNavbar, Collapse, Button, IconButton, Typography } from '@material-tailwind/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const NAV_MENU = ['Inicio', 'Acerca', 'Contacto']

function NavItem({ children }: { children: React.ReactNode }) {
  return (
    <li>
      <Typography placeholder='' onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} as='a' href='#' variant='paragraph' className='flex items-center gap-2 font-medium'>
        {children}
      </Typography>
    </li>
  )
}

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [isScrolling, setIsScrolling] = useState(false)

  function handleOpen() {
    setOpen((cur) => !cur)
  }

  useEffect(() => {
    window.addEventListener('resize', () => window.innerWidth >= 960 && setOpen(false))
  }, [])

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsScrolling(true)
      } else {
        setIsScrolling(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <MTNavbar placeholder='' onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} fullWidth shadow={false} blurred={false} color={isScrolling ? 'white' : 'transparent'} className='fixed top-0 z-50 border-0'>
      <div className='container mx-auto flex items-center justify-between'>
        <Typography placeholder='' onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} as='a' href='/' className='text-lg font-bold' color={isScrolling ? 'blue-gray' : 'white'}>
          Debatiendo
        </Typography>
        <ul className={`ml-10 hidden items-center gap-6 lg:flex ${isScrolling ? 'text-gray-900' : 'text-white'}`}>
          {NAV_MENU.map((name) => (
            <NavItem key={name}>{name}</NavItem>
          ))}
        </ul>
        {/* <div className='hidden items-center gap-2 lg:flex'>
          <Button placeholder='' onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} variant='text' color={isScrolling ? 'gray' : 'white'}>
            Autenticarse
          </Button>
        </div> */}
        <IconButton placeholder='' onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} variant='text' onClick={handleOpen} color={isScrolling ? 'gray' : 'white'} className='ml-auto inline-block lg:hidden'>
          {open ? <XMarkIcon strokeWidth={2} className='h-6 w-6' /> : <Bars3Icon strokeWidth={2} className='h-6 w-6' />}
        </IconButton>
      </div>
      <Collapse open={open}>
        <div className='container mx-auto bg-white rounded-lg py-4 px-6 mt-3 border-t border-gray-200'>
          <ul className='flex flex-col gap-4'>
            {NAV_MENU.map((name) => (
              <NavItem key={name}>{name}</NavItem>
            ))}
          </ul>
          {/* <div className='mt-6 flex items-center gap-2'>
            <Button placeholder='' onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} variant='text'>
              Autenticarse
            </Button>
          </div> */}
        </div>
      </Collapse>
    </MTNavbar>
  )
}

export default Navbar
