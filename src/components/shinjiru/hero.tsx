import { Fragment } from 'react'

import Autoplay from 'embla-carousel-autoplay'

import { motion } from 'motion/react'
import { ArrowRightIcon } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { cn } from '@/lib/utils'
import { MotionPreset } from '@/components/ui/motion-preset'

type Data = {
  title: string
  bgColor: string
}[]

type Image = {
  img: string
  title: string
}[]

const data: Data = [
  {
    title: 'Approach',
    bgColor: 'bg-sky-600/50 dark:bg-sky-400/40'
  },
  {
    title: 'Code Agency',
    bgColor: 'bg-green-600/50 dark:bg-green-400/40'
  },
  {
    title: 'Marketing Strategy',
    bgColor: 'bg-amber-600/50 dark:bg-amber-400/40'
  }
]

const images: Image = [
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/about-us/image-27.png',
    title: 'Development'
  },
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/about-us/image-28.png',
    title: 'UI/UX Designer'
  },
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/about-us/image-29.png',
    title: 'Marketing'
  }
]

const HeroShinjiru = () => {
  return (
    <section className='bg-muted overflow-hidden py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='mb-12 max-w-6xl space-y-4 text-center md:mb-16 lg:mb-24'>
          <MotionPreset
            component='p'
            className='text-primary text-sm font-medium uppercase'
            fade
            blur
            slide={{ direction: 'up', offset: 50 }}
            transition={{ duration: 0.7 }}
          >
            Shinjiru
          </MotionPreset>

          <MotionPreset
            component='h2'
            className='text-2xl font-semibold md:text-3xl lg:text-4xl'
            fade
            blur
            slide={{ direction: 'up', offset: 50 }}
            delay={0.25}
            transition={{ duration: 0.7 }}
          >
            Driven by Purpose, Powered by People
          </MotionPreset>

          <MotionPreset
            component='p'
            className='text-muted-foreground text-xl'
            fade
            blur
            slide={{ direction: 'up', offset: 50 }}
            delay={0.5}
            transition={{ duration: 0.7 }}
          >
            Our achievement story stands as a powerful testament to teamwork and perseverance. United, we have faced
            challenges, celebrated victories, and woven a narrative of growth and success.
          </MotionPreset>

          <MotionPreset
            fade
            blur
            slide={{ direction: 'up', offset: 50 }}
            delay={0.8}
            transition={{ duration: 0.7 }}
            className='flex justify-center gap-4'
          >
            <Button size='lg' className='group rounded-lg text-base has-[>svg]:px-6' asChild>
              <a href='#'>
                Read more
                <ArrowRightIcon className='transition-transform duration-200 group-hover:translate-x-0.5' />
              </a>
            </Button>
            <Button size='lg' variant='outline' className='group rounded-lg text-base shadow-none' asChild>
              <a href='#'>Free trial</a>
            </Button>
          </MotionPreset>
        </div>
      </div>

      <MotionPreset
        className='w-full overflow-hidden'
        fade
        blur
        delay={0.95}
        slide={{ direction: 'up', offset: 50 }}
        transition={{ duration: 0.7 }}
      >
        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
              stopOnInteraction: false,
              stopOnFocusIn: false
            })
          ]}
          opts={{ loop: true, align: 'center' }}
          className='w-full'
        >
          <CarouselContent className='-ml-6 max-lg:-ml-12'>
            {Array.from({ length: Math.max(data.length, images.length) * 3 }).map((_, i) => {
              const index = i % Math.max(data.length, images.length)

              return (
                <Fragment key={i}>
                  {/* Image Card */}
                  {images[index] && (
                    <CarouselItem className='basis-auto pl-6'>
                      <div className='relative h-81 max-w-67 overflow-hidden rounded-2xl'>
                        <img src={images[index].img} alt={images[index].title} className='size-full object-cover' />
                        <div className='absolute top-4 right-4'>
                          <Badge className='px-3 py-1'>{images[index].title}</Badge>
                        </div>
                      </div>
                    </CarouselItem>
                  )}

                  {/* Data Card */}
                  {data[index] && (
                    <CarouselItem className='basis-auto pl-6'>
                      <div
                        className={cn(
                          'group/card relative h-81 w-full max-w-67 overflow-hidden rounded-2xl bg-sky-500/50 p-4',
                          data[index].bgColor
                        )}
                      >
                        <h3
                          className='text-5xl font-bold text-transparent'
                          style={{
                            WebkitTextStroke: '2px white'
                          }}
                        >
                          {data[index].title}
                        </h3>

                        <motion.div
                          className={cn('absolute -bottom-14', index % 2 === 0 ? '-right-14' : '-left-14')}
                          animate={{ rotate: [0, 360, 360] }}
                          transition={{
                            duration: 2,
                            ease: 'easeInOut',
                            repeat: Infinity,
                            times: [0, 0.5, 1]
                          }}
                        >
                          <svg
                            width='179'
                            height='179'
                            viewBox='0 0 179 179'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <circle
                              cx='89.5'
                              cy='89.5'
                              r='43'
                              stroke='url(#paint0_linear_11_412)'
                              strokeOpacity='0.5'
                              strokeWidth='23'
                            />
                            <circle
                              cx='89.5'
                              cy='89.5'
                              r='78'
                              stroke='url(#paint1_linear_11_412)'
                              strokeOpacity='0.5'
                              strokeWidth='23'
                            />
                            <defs>
                              <linearGradient
                                id='paint0_linear_11_412'
                                x1='89.5'
                                y1='35'
                                x2='89.5'
                                y2='144'
                                gradientUnits='userSpaceOnUse'
                              >
                                <stop stopColor='var(--primary)' stopOpacity='0.5' />
                                <stop offset='1' stopColor='white' stopOpacity='0' />
                              </linearGradient>
                              <linearGradient
                                id='paint1_linear_11_412'
                                x1='89.5'
                                y1='0'
                                x2='89.5'
                                y2='179'
                                gradientUnits='userSpaceOnUse'
                              >
                                <stop stopColor='var(--primary)' stopOpacity='0.5' />
                                <stop offset='1' stopColor='white' stopOpacity='0' />
                              </linearGradient>
                            </defs>
                          </svg>
                        </motion.div>
                      </div>
                    </CarouselItem>
                  )}
                </Fragment>
              )
            })}
          </CarouselContent>
        </Carousel>
      </MotionPreset>
    </section>
  )
}

export default HeroShinjiru
