'use client'

import { MailIcon, MenuIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'

import MenuDropdown from './menu-dropdown'
import MenuNavigation from './menu-navigation'
import type { NavigationSection } from './menu-navigation'

import { cn } from '@/lib/utils'

import Logo from '../logo' 
import { Link } from '@tanstack/react-router'
import { useEffect, useState } from 'react'

const navigationData: NavigationSection[] = [
  {
    title: 'Home',
    href: '#'
  },
  {
    title: 'Categories',
    href: '#'
  },
  {
    title: 'Team',
    href: '#'
  },
  {
    title: 'About Us',
    href: '#'
  }
]

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 z-50 h-17.5 w-full transition-all duration-300',
        {
          'bg-background shadow-md': isScrolled
        },
      )}
    >
      <div className='mx-auto flex h-full max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8'>
        {/* Logo */}
        <Link to='/' className='flex items-center gap-3'>
          <Logo />
        </Link>

        {/* Navigation */}
        <MenuNavigation navigationData={navigationData} className='max-lg:hidden' />

        {/* Actions */}
        <div className='flex gap-4'>
          <Button variant='outline' className='max-sm:hidden' asChild>
            <a href='#'>Get in Touch</a>
          </Button>

          {/* Navigation for small screens */}
          <div className='flex gap-3'>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant='outline' size='icon' className='sm:hidden' asChild>
                  <a href='#'>
                    <MailIcon />
                    <span className='sr-only'>Get in Touch</span>
                  </a>
                </Button>
              </TooltipTrigger>
              <TooltipContent>Get in Touch</TooltipContent>
            </Tooltip>

            <MenuDropdown
              align='end'
              navigationData={navigationData}
              trigger={
                <Button variant='outline' size='icon' className='lg:hidden'>
                  <MenuIcon />
                  <span className='sr-only'>Menu</span>
                </Button>
              }
            />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
