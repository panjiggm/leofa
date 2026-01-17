import { ArrowRightIcon, CheckCircleIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { MotionPreset } from '@/components/ui/motion-preset'
import { getIntlayer } from 'intlayer'
import { useLocation, useParams } from '@tanstack/react-router'

const getLocaleFromUrl = (pathname: string, params: any): string => {
  const validLocales = ['en', 'id', 'zh'];
  
  const pathSegments = pathname.split("/").filter(Boolean);
  const firstSegment = pathSegments[0]?.toLowerCase();
  
  if (firstSegment && validLocales.includes(firstSegment)) {
    return firstSegment;
  }
  
  const paramLocale = params?.locale?.toLowerCase();
  if (paramLocale && validLocales.includes(paramLocale)) {
    return paramLocale;
  }
  
  return 'en';
};

const AboutShinjiru = () => {
  const { pathname } = useLocation()
  const params = useParams({ strict: false })
  const locale = getLocaleFromUrl(pathname, params)
  const content = getIntlayer("shinjiru-page", locale)

  const statCards = [
    {
      title: content.about.stats.experience.title,
      description: content.about.stats.experience.description
    },
    {
      title: content.about.stats.products.title,
      description: content.about.stats.products.description
    },
    {
      title: content.about.stats.customers.title,
      description: content.about.stats.customers.description
    },
    {
      title: content.about.stats.satisfaction.title,
      description: content.about.stats.satisfaction.description
    }
  ]

  const featureCards = [
    {
      title: content.about.features.whyChoose.title,
      description: content.about.features.whyChoose.description
    },
    {
      title: content.about.features.quality.title,
      description: content.about.features.quality.description
    },
    {
      title: content.about.features.comfort.title,
      description: content.about.features.comfort.description
    }
  ]

  return (
    <section className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='mb-10 grid gap-16 lg:grid-cols-2'>
          <div className='space-y-10'>
            <div className='space-y-4'>
              <MotionPreset
                component='p'
                className='text-primary text-sm font-medium uppercase'
                fade
                blur
                slide={{ direction: 'up', offset: 30 }}
                transition={{ duration: 0.6 }}
              >
                {content.about.badge}
              </MotionPreset>
              
              <MotionPreset
                component='h2'
                className='text-2xl font-semibold md:text-3xl lg:text-4xl'
                fade
                blur
                slide={{ direction: 'up', offset: 30 }}
                delay={0.15}
                transition={{ duration: 0.6 }}
              >
                {content.about.heading}
              </MotionPreset>
              
              <MotionPreset
                component='p'
                className='text-muted-foreground text-xl'
                fade
                blur
                slide={{ direction: 'up', offset: 30 }}
                delay={0.3}
                transition={{ duration: 0.6 }}
              >
                {content.about.description}
              </MotionPreset>
            </div>

            {/* Stats grid with 4 cards */}
            <div className='grid gap-6 md:grid-cols-2'>
              {statCards.map((stat, index) => (
                <MotionPreset
                  key={index}
                  fade
                  blur
                  slide={{ direction: 'up', offset: 40 }}
                  delay={0.4 + index * 0.1}
                  transition={{ duration: 0.5 }}
                >
                  <Card className='border-primary/30 hover:border-primary rounded-lg shadow-none transition-colors duration-300 h-full'>
                    <CardHeader>
                      <CardTitle className='text-xl'>{stat.title}</CardTitle>
                      <CardDescription className='text-base'>{stat.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </MotionPreset>
              ))}
            </div>

            <MotionPreset
              fade
              blur
              slide={{ direction: 'up', offset: 30 }}
              delay={0.8}
              transition={{ duration: 0.5 }}
            >
              <Button asChild size='lg' className='group rounded-lg text-base has-[>svg]:px-6'>
                <a href='#'>
                  {content.about.readMore}
                  <ArrowRightIcon className='transition-transform duration-200 group-hover:translate-x-0.5' />
                </a>
              </Button>
            </MotionPreset>
          </div>

          <MotionPreset
            fade
            blur
            slide={{ direction: 'right', offset: 50 }}
            delay={0.3}
            transition={{ duration: 0.7 }}
          >
            <img
              src='https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/about-us/image-8.png'
              alt='About Shinjiru'
              className='h-full max-h-175 w-full rounded-md object-cover'
            />
          </MotionPreset>
        </div>

        {/* Feature cards */}
        <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
          {featureCards.map((feature, index) => (
            <MotionPreset
              key={index}
              fade
              blur
              slide={{ direction: 'up', offset: 40 }}
              delay={0.9 + index * 0.15}
              transition={{ duration: 0.5 }}
            >
              <Card className='rounded-lg shadow-none h-full max-lg:last:col-span-full'>
                <CardHeader className='gap-3'>
                  <CardTitle className='flex items-center gap-3 text-xl'>
                    <CheckCircleIcon />
                    {feature.title}
                  </CardTitle>
                  <CardDescription className='text-base'>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            </MotionPreset>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutShinjiru
