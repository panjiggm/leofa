import { ArrowUpRightIcon, Car, Bed, MessageSquareMoreIcon, Package, Sparkles } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

import BlurText from '@/components/ui/blur-text'
import ImageStack from './image-stack'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

import { MotionPreset } from '@/components/ui/motion-preset'
import { Marquee } from '@/components/ui/marquee'
import { CraftButton, CraftButtonIcon, CraftButtonLabel } from '@/components/ui/craft-button'
import { useIntlayer } from 'react-intlayer'

const uiImages = [
    {
      id: '1',
      img: 'https://cdn.shadcnstudio.com/ss-assets/template/landing-page/craft/image-04.png',
      alt: 'Image 1'
    },
    {
      id: '2',
      img: 'https://cdn.shadcnstudio.com/ss-assets/template/landing-page/craft/image-05.png',
      alt: 'Image 2'
    },
    {
      id: '3',
      img: 'https://cdn.shadcnstudio.com/ss-assets/template/landing-page/craft/image-06.png',
      alt: 'Image 3'
    }
  ]
  
  const framerImages = [
    {
      id: '1',
      img: 'https://cdn.shadcnstudio.com/ss-assets/template/landing-page/craft/image-01.png',
      alt: 'Modern UI Design'
    },
    {
      id: '2',
      img: 'https://cdn.shadcnstudio.com/ss-assets/template/landing-page/craft/image-02.png',
      alt: 'Creative Illustrations'
    },
    {
      id: '3',
      img: 'https://cdn.shadcnstudio.com/ss-assets/template/landing-page/craft/image-03.png',
      alt: 'Responsive Layouts'
    }
  ]
  
  const skills = [
    'Foam Manufacturing',
    'Quality Control',
    'Custom Density',
    'Industrial Grade',
    'Automotive Detailing',
    'Sleep Products',
    'Furniture Solutions',
    'Fashion Materials',
    'Research & Development'
  ]

const MainProducts = () => {
  const content = useIntlayer("home-page");
  const headingRef = useRef<HTMLDivElement>(null)
  const [headingText, setHeadingText] = useState('')

  useEffect(() => {
    if (headingRef.current) {
      setHeadingText(headingRef.current.textContent || '')
    }
  }, [content.main_products.heading])

  return (
    <section className='py-8 sm:py-16'>
      <div className='mx-auto max-w-6xl space-y-8 px-4 sm:space-y-16 sm:px-6 lg:px-8'>
        {/* Header - Leofa */}
        <div className='space-y-2.5'>
          <MotionPreset fade blur slide={{ direction: 'down', offset: 50 }} transition={{ duration: 0.5 }}>
            <Badge variant='outline' className='rounded-none'>
              {content.main_products.badge}
            </Badge>
          </MotionPreset>
          <div className='flex justify-between gap-4 max-md:flex-col'>
            <MotionPreset delay={0.3} transition={{ duration: 0.5 }} className='max-w-100'>
              <div ref={headingRef} className='hidden'>
                {content.main_products.heading}
              </div>
              <h2 className='text-2xl font-semibold sm:text-3xl lg:text-4xl'>
                <BlurText
                  text={headingText}
                  delay={50}
                  animateBy='words'
                  direction='bottom'
                />
              </h2>
            </MotionPreset>
            <MotionPreset
              delay={0.3}
              fade
              blur
              slide={{ direction: 'down', offset: 50 }}
              transition={{ duration: 0.5 }}
            >
              <p className='text-muted-foreground max-w-xl text-lg'>
                {content.main_products.description}
              </p>
            </MotionPreset>
          </div>
        </div>

        <MotionPreset delay={0.45} fade blur transition={{ duration: 0.6 }}>
          <Separator />
        </MotionPreset>

        {/* Grid */}
        <div className='grid gap-6 sm:grid-cols-2'>
          <div className='flex flex-col gap-6'>
            {/* Project9 - Automotive Detailing */}
            <MotionPreset fade blur slide={{ offset: 50 }} delay={0.8} transition={{ duration: 0.6 }}>
              <Card className='bg-muted rounded-3xl border-0 shadow-none'>
                <CardHeader className='gap-3'>
                  <CardTitle className='flex items-center gap-2.5 text-xl'>
                    <Car className='size-5' />
                    <span>{content.main_products.project9.name}</span>
                  </CardTitle>
                  <CardDescription className='text-lg'>
                    {content.main_products.project9.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ImageStack images={uiImages} />
                </CardContent>
              </Card>
            </MotionPreset>

            {/* Project9 - Industrial Grade */}
            <MotionPreset fade blur slide={{ offset: 50 }} delay={1.2} transition={{ duration: 0.6 }}>
              <Card className='bg-warning rounded-3xl shadow-none'>
                <CardHeader className='gap-3'>
                  <CardTitle className='flex items-center gap-2.5 text-xl text-primary'>
                    <Sparkles className='size-5' />
                    <span>{content.main_products.project9.qualityLabel}</span>
                  </CardTitle>
                  <CardDescription className='text-lg text-primary'>
                    {content.main_products.project9.industrialGrade.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </MotionPreset>
          </div>

          <div className='flex flex-col gap-6'>
            {/* Shinjiru - Sleep Products */}
            <MotionPreset
              fade
              blur
              delay={0.6}
              slide={{ direction: 'right', offset: 50 }}
              transition={{ duration: 0.6 }}
            >
              <Card className='rounded-3xl shadow-none bg-primary'>
                <CardHeader className='gap-3'>
                  <CardTitle className='flex items-center gap-2.5 text-xl text-primary-foreground'>
                    <Bed className='size-5' />
                    <span>{content.main_products.shinjiru.name}</span>
                  </CardTitle>
                  <CardDescription className='text-lg text-primary-foreground'>
                    {content.main_products.shinjiru.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </MotionPreset>

            {/* Shinjiru - Product Range */}
            <MotionPreset
              fade
              blur
              slide={{ direction: 'right', offset: 50 }}
              delay={1}
              transition={{ duration: 0.6 }}
              className='flex-1'
            >
              <Card className='bg-muted h-full rounded-3xl border-0 shadow-none'>
                <CardHeader className='gap-3'>
                  <CardTitle className='flex items-center gap-2.5 text-xl'>
                    <Package className='size-5' />
                    <span>{content.main_products.shinjiru.productRange}</span>
                  </CardTitle>
                  <CardDescription className='text-lg'>
                    {content.main_products.shinjiru.completeSleepSolutions.description}
                  </CardDescription>
                </CardHeader>
                <Marquee pauseOnHover duration={20} gap={1} className='flex-1 items-center py-0'>
                  {framerImages.map((image, index) => (
                    <img key={index} src={image.img} alt={image.alt} className='h-60 w-full max-w-73 rounded-md' />
                  ))}
                </Marquee>
              </Card>
            </MotionPreset>
          </div>
        </div>

        {/* Skills */}
        <MotionPreset
          className='relative'
          fade
          blur
          slide={{ direction: 'down', offset: 50 }}
          delay={1.35}
          transition={{ duration: 0.6 }}
        >
          <div className='from-background pointer-events-none absolute inset-y-0 left-0 z-1 w-35 bg-linear-to-r to-transparent max-sm:hidden' />
          <div className='from-background pointer-events-none absolute inset-y-0 right-0 z-1 w-35 bg-linear-to-l to-transparent max-sm:hidden' />
          <div className='w-full overflow-hidden'>
            <Marquee pauseOnHover duration={30} gap={1}>
              {skills.map((skill, index) => (
                <Badge variant='outline' key={index} className='px-4 py-1 text-sm'>
                  {skill}
                </Badge>
              ))}
            </Marquee>
          </div>
          <div className='w-full overflow-hidden'>
            <Marquee pauseOnHover duration={30} gap={1} reverse>
              {skills.map((skill, index) => (
                <Badge variant='outline' key={index} className='px-4 py-1 text-sm'>
                  {skill}
                </Badge>
              ))}
            </Marquee>
          </div>
        </MotionPreset>

        <MotionPreset delay={1.5} fade blur transition={{ duration: 0.6 }}>
          <Separator />
        </MotionPreset>

        {/* Action Button */}
        <MotionPreset
          className='flex items-center justify-center gap-4'
          fade
          blur
          slide={{ direction: 'down', offset: 50 }}
          delay={1.65}
          transition={{ duration: 0.6 }}
        >
          <CraftButton asChild>
            <a href='/contact'>
              <CraftButtonLabel>{content.main_products.actionButtons.contactUs}</CraftButtonLabel>
              <CraftButtonIcon>
                <ArrowUpRightIcon className='size-3 stroke-2 transition-transform duration-500 group-hover:rotate-45' />
              </CraftButtonIcon>
            </a>
          </CraftButton>
          <Separator className='h-9!' orientation='vertical' />
          <Button variant='outline' className='rounded-full' asChild>
            <a href='/contact'>
              {content.main_products.actionButtons.letsTalk} <MessageSquareMoreIcon className='size-4' />
            </a>
          </Button>
        </MotionPreset>
      </div>
    </section>
  )
}

export default MainProducts
