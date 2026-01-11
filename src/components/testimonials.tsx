import { useEffect, useState } from 'react'

import Autoplay from 'embla-carousel-autoplay'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from '@/components/ui/carousel'
import { Badge } from '@/components/ui/badge'

import { cn } from '@/lib/utils'
import { MotionPreset } from '@/components/ui/motion-preset'


export type TestimonialItem = {
    avatar: string
    name: string
    role: string
    company: string
    content: string
    className: string
    primary: boolean
  }

  
const testimonials: TestimonialItem[] = [
    {
      name: 'Paityn Lipshutz',
      role: 'Product Lead',
      company: 'NovaTech Labs',
      avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-2.png?width=40&height=40&format=auto',
      content:
        'This tool transformed our workflow—clean design, seamless performance, and saves us hours every week. Truly exceptional.',
      className: 'bg-primary text-white',
      primary: true
    },
    {
      name: 'Angel Lubin',
      role: 'COO',
      company: 'Aerius Systems',
      avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-17.png?width=40&height=40&format=auto',
      content:
        'Outstanding experience—setup was effortless, and the platform has been incredibly reliable. Support responded within minutes.',
      className: 'bg-warning text-primary',
      primary: false
    },
    {
      name: 'Lincoln Stanton',
      role: 'Founder',
      company: 'Brightline Studios',
      avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-1.png?width=40&height=40&format=auto',
      content:
        'A phenomenal product—robust features, intuitive UI, and consistent performance. Completely exceeded expectations.',
      className: 'bg-primary text-white',
      primary: true
    },
    {
      name: 'Skylar Lipshutz',
      role: 'UX Lead',
      company: 'PixelForge',
      avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-12.png?width=40&height=40&format=auto',
      content:
        'Beautifully crafted and incredibly easy to use. This instantly improved our team’s productivity. Highly recommended.',
      className: 'bg-warning text-primary', 
      primary: false
    },
    {
      name: 'Corey Franci',
      role: 'CTO',
      company: 'CloudNova',
      avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-7.png?width=40&height=40&format=auto',
      content:
        'Remarkable quality—fast, stable, and thoughtfully built. The support team handled every question with expertise.',
      className: 'bg-primary text-white',
      primary: true
    },
    {
      name: 'Anika Franci',
      role: 'Engineer',
      company: 'SupportFlow',
      avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-2.png?width=40&height=40&format=auto',
      content:
        'Highly efficient and incredibly user-friendly. Delivered exactly what we needed with flawless customer support.',
      className: 'bg-warning text-primary',
      primary: false
    }
]
  
const Testimonials = () => {
    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = useState(0)
    const [count, setCount] = useState(0)
  
    useEffect(() => {
      if (!api) {
        return
      }
  
      const handleResize = () => {
        setCount(api.scrollSnapList().length)
      }
  
      window.addEventListener('resize', handleResize)
      handleResize()
      setCurrent(api.selectedScrollSnap())
  
      api.on('select', () => {
        setCurrent(api.selectedScrollSnap())
      })
  
      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }, [api])
  
    return (
      <section className='py-8 sm:py-16 lg:py-24'>
        <Carousel
          className='mx-auto max-w-7xl space-y-12 px-4 sm:space-y-16 sm:px-6 lg:space-y-24 lg:px-8'
          opts={{
            align: 'start'
          }}
          plugins={[
            Autoplay({
              delay: 2000,
              stopOnInteraction: false,
              stopOnFocusIn: false
            })
          ]}
          setApi={setApi}
        >
          <div className='flex justify-between gap-4 gap-x-11 max-sm:flex-col sm:items-center'>
            <div className='space-y-4'>
              <MotionPreset fade blur slide={{ offset: 50 }} transition={{ duration: 0.5 }}>
                <Badge variant='outline' className='text-sm font-normal'>
                  Testimonials
                </Badge>
              </MotionPreset>
  
              <MotionPreset
                component='h2'
                className='text-2xl font-semibold sm:text-3xl lg:text-4xl'
                fade
                blur
                slide={{ offset: 50 }}
                delay={0.3}
                transition={{ duration: 0.5 }}
              >
                Real Stories,{' '}
                <span className='relative z-1'>
                  Real People
                  <span
                    className='from-primary absolute bottom-0 left-0 -z-1 h-0.5 w-full rounded-full bg-linear-to-r to-transparent'
                    aria-hidden='true'
                  />
                </span>
              </MotionPreset>
  
              <MotionPreset
                component='p'
                className='text-muted-foreground text-xl'
                fade
                blur
                slide={{ offset: 50 }}
                delay={0.6}
                transition={{ duration: 0.5 }}
              >
                Check out what our awesome clients are saying about us!
              </MotionPreset>
            </div>
  
            <MotionPreset
              className='flex items-center gap-4 sm:gap-7'
              fade
              blur
              delay={0.3}
              slide={{ direction: 'right', offset: 50 }}
              transition={{ duration: 0.5 }}
            >
              <CarouselPrevious
                variant='default'
                className='disabled:bg-primary/10 disabled:text-primary static size-9 translate-y-0 disabled:opacity-100'
              />
              <CarouselNext
                variant='default'
                className='disabled:bg-primary/10 disabled:text-primary static size-9 translate-y-0 disabled:opacity-100'
              />
            </MotionPreset>
          </div>
  
          {/* Right Testimonial Carousel */}
          <MotionPreset
            className='space-y-12'
            fade
            blur
            slide={{ direction: 'down', offset: 50 }}
            transition={{ duration: 0.5 }}
            delay={0.9}
          >
            <CarouselContent className='py-3 sm:-ml-6'>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className='sm:basis-1/2 sm:pl-6 md:basis-1/3 lg:basis-1/4'>
                  <Card
                    className={cn(
                      'h-full border-none shadow-none transition-all duration-300',
                      testimonial.className,
                      index % 2 === 0 ? 'hover:rotate-0 sm:-rotate-2' : 'hover:rotate-0 sm:rotate-1'
                    )}
                  >
                    <CardContent className='space-y-4'>
                      <div className='flex gap-2'>
                        <Avatar className='size-10'>
                          <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                          <AvatarFallback className='text-xs'>{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className='space-y-0.5'>
                          <h4 className='font-medium'>{testimonial.name}</h4>
                          <p className={cn(testimonial.primary ? 'text-white/50' : 'text-primary/50', 'text-sm')}>
                            {testimonial.role} at{' '}
                            <span className={cn(testimonial.primary ? 'text-white' : 'text-primary', 'font-semibold')}>{testimonial.company}</span>
                          </p>
                        </div>
                      </div>
                      <p className={cn(testimonial.primary ? 'text-white' : 'text-primary')}>{testimonial.content}</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
  
            <div className='flex items-center justify-center gap-1'>
              {Array.from({ length: count }).map((_, index) => (
                <button
                  key={index}
                  className={cn(
                    'size-2.5 cursor-pointer rounded-full transition-colors',
                    index === current ? 'bg-primary' : 'bg-primary/20'
                  )}
                  onClick={() => api?.scrollTo(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </MotionPreset>
        </Carousel>
      </section>
    )
  }
  
  export default Testimonials