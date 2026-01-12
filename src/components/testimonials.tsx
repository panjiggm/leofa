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
import { useIntlayer, useLocale } from 'react-intlayer'

export type TestimonialItem = {
    avatar: string
    name: string
    role: string
    company: string
    content: string
    className: string
    primary: boolean
  }

const Testimonials = () => {
    const content = useIntlayer("home-page");
    const { locale } = useLocale();
    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = useState(0)
    const [count, setCount] = useState(0)
    
    // Helper to extract string from React element, translation object, or string
    const getTranslatedValue = (val: any): string => {
      // If already a string, return it
      if (typeof val === 'string') return val
      if (val == null) return ''
      
      // Check if it's a React element (has $$typeof property)
      if (val && typeof val === 'object' && val.$$typeof) {
        // React element - extract text from props.children
        const extractTextFromReactElement = (element: any, depth = 0): string => {
          if (depth > 10) return '' // Prevent infinite recursion
          if (!element) return ''
          if (typeof element === 'string') return element
          if (typeof element === 'number') return String(element)
          if (Array.isArray(element)) {
            return element.map((child: any) => extractTextFromReactElement(child, depth + 1)).join('')
          }
          if (element.props) {
            // Check props.children
            if (element.props.children !== undefined) {
              return extractTextFromReactElement(element.props.children, depth + 1)
            }
            // Check if there's a 'value' prop
            if (element.props.value && typeof element.props.value === 'string') {
              return element.props.value
            }
          }
          return ''
        }
        const result = extractTextFromReactElement(val)
        // Debug: log if result is empty
        if (!result && val.props) {
          console.log('Empty result from React element:', {
            props: val.props,
            type: val.type,
            children: val.props.children
          })
        }
        return result
      }
      
      // If it's a regular object (translation object with locale keys)
      if (typeof val === 'object') {
        // If it's a translation object with locale keys, get value for current locale
        if (locale && val[locale] && typeof val[locale] === 'string') {
          return val[locale]
        }
        // Fallback to other locales
        if (val.en && typeof val.en === 'string') return val.en
        if (val.id && typeof val.id === 'string') return val.id
        if (val.zh && typeof val.zh === 'string') return val.zh
        // Try to get any string value from object
        for (const key in val) {
          if (typeof val[key] === 'string') return val[key]
        }
        return ''
      }
      
      return String(val)
    }

    // Map testimonials from content with alternating primary/warning colors
    const testimonials: TestimonialItem[] = content.testimonials.items.map((item: any, index: number) => ({
      name: getTranslatedValue(item.name),
      role: getTranslatedValue(item.role),
      company: getTranslatedValue(item.company),
      content: getTranslatedValue(item.content),
      avatar: `https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-${(index % 6) + 1}.png?width=40&height=40&format=auto`,
      className: index % 2 === 0 ? 'bg-primary text-white' : 'bg-warning text-primary',
      primary: index % 2 === 0
    }))
  
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
                  {content.testimonials.badge}
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
                {content.testimonials.title}
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
                {content.testimonials.description}
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
