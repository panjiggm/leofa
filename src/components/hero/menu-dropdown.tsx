'use client'

import type { ReactNode } from 'react'

import { ChevronRightIcon, CircleSmallIcon } from 'lucide-react'

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

import type { NavigationSection } from './menu-navigation'

type Props = {
  trigger: ReactNode
  navigationData: NavigationSection[]
  align?: 'center' | 'end' | 'start'
}

const MenuDropdown = ({ trigger, navigationData, align = 'start' }: Props) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{trigger}</DropdownMenuTrigger>
      <DropdownMenuContent className='w-56' align={align}>
        {navigationData.map((navItem, index) => {
          if (navItem.href) {
            return (
              <DropdownMenuItem key={index} asChild>
                <a href={navItem.href}>
                  {navItem.icon}
                  {navItem.title}
                </a>
              </DropdownMenuItem>
            )
          }

          return (
            <Collapsible key={index} asChild>
              <DropdownMenuGroup>
                <CollapsibleTrigger asChild>
                  <DropdownMenuItem onSelect={event => event.preventDefault()} className='justify-between'>
                    {navItem.icon}
                    <span className='flex-1'>{navItem.title}</span>
                    <ChevronRightIcon className='shrink-0 transition-transform [[data-state="open"]>&]:rotate-90' />
                  </DropdownMenuItem>
                </CollapsibleTrigger>
                <CollapsibleContent className='pl-2'>
                  {navItem.items?.map((item, itemIndex) => (
                    <DropdownMenuItem key={itemIndex} asChild>
                      <a href={item.href}>
                        <CircleSmallIcon />
                        <span>{item.title}</span>
                      </a>
                    </DropdownMenuItem>
                  ))}
                </CollapsibleContent>
              </DropdownMenuGroup>
            </Collapsible>
          )
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default MenuDropdown
