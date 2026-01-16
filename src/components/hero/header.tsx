import { MailIcon, MenuIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { useLocation, useParams } from '@tanstack/react-router'
import { getIntlayer } from 'intlayer'

import MenuDropdown from './menu-dropdown'
import MenuNavigation from './menu-navigation'
import type { NavigationSection } from './menu-navigation'

import { cn } from '@/lib/utils'

import Logo from '../logo' 
import { Link } from '@tanstack/react-router'
import { useEffect, useState, useMemo } from 'react'
import { LocaleSwitcher } from '../locale-switcher'

const getLocaleFromUrl = (pathname: string, params: any): string => {
  const validLocales = ['en', 'id', 'zh'];
  
  // Extract from pathname first - get first segment (most reliable for root route)
  const pathSegments = pathname.split("/").filter(Boolean);
  const firstSegment = pathSegments[0]?.toLowerCase();
  
  // Check if first segment is a valid locale
  if (firstSegment && validLocales.includes(firstSegment)) {
    return firstSegment;
  }
  
  // Fallback to route params if available
  const paramLocale = params?.locale?.toLowerCase();
  if (paramLocale && validLocales.includes(paramLocale)) {
    return paramLocale;
  }
  
  // Default to 'en' (default locale from config)
  return 'en';
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const { pathname } = useLocation()
  const params = useParams({ strict: false })
  
  // Calculate locale from URL - will recalculate on every render when pathname changes
  const locale = getLocaleFromUrl(pathname, params)
  
  // Get content from server-side intlayer - will get fresh content for current locale
  const content = getIntlayer("home-page", locale)

  // Build navigation data dynamically from translations
  const navigationData: NavigationSection[] = useMemo(() => [
    {
      title: content.header.navigation.home,
      href: '#'
    },
    {
      title: content.header.navigation.categories,
      href: '#'
    },
    {
      title: content.header.navigation.team,
      href: '#'
    },
    {
      title: content.header.navigation.aboutUs,
      href: '#'
    }
  ], [content])

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
        <Link to='/{-$locale}' className='flex items-center gap-3'>
          <Logo />
        </Link>

        {/* Navigation */}
        <MenuNavigation navigationData={navigationData} className='max-lg:hidden' />

        {/* Actions */}
        <div className='flex gap-2'>
          <LocaleSwitcher />
          
          <Button variant='outline' className='max-sm:hidden' asChild>
            <a href='#'>{content.header.actions.getInTouch}</a>
          </Button>

          {/* Navigation for small screens */}
          <div className='flex gap-3'>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant='outline' size='icon' className='sm:hidden' asChild>
                  <a href='#'>
                    <MailIcon />
                    <span className='sr-only'>{content.header.actions.getInTouch}</span>
                  </a>
                </Button>
              </TooltipTrigger>
              <TooltipContent>{content.header.actions.getInTouch}</TooltipContent>
            </Tooltip>

            <MenuDropdown
              align='end'
              navigationData={navigationData}
              trigger={
                <Button variant='outline' size='icon' className='lg:hidden'>
                  <MenuIcon />
                  <span className='sr-only'>{content.header.actions.menu}</span>
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
