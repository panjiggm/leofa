import { ArrowRightIcon, CheckCircleIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
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

const AboutProject9 = () => {
  const { pathname } = useLocation()
  const params = useParams({ strict: false })
  const locale = getLocaleFromUrl(pathname, params)
  const content = getIntlayer("project9-page", locale)

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
      title: content.about.stats.partners.title,
      description: content.about.stats.partners.description
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
      title: content.about.features.support.title,
      description: content.about.features.support.description
    }
  ]

  return (
    <section className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='mb-10 grid gap-16 lg:grid-cols-2'>
          <div className='space-y-10'>
            <div className='space-y-4'>
              <p className='text-primary text-sm font-medium uppercase'>{content.about.badge}</p>
              <h2 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>{content.about.heading}</h2>
              <p className='text-muted-foreground text-xl'>
                {content.about.description}
              </p>
            </div>

            {/* Stats grid with 4 cards */}
            <div className='grid gap-6 md:grid-cols-2'>
              {statCards.map((stat, index) => (
                <Card
                  key={index}
                  className='border-primary/30 hover:border-primary rounded-lg shadow-none transition-colors duration-300'
                >
                  <CardHeader>
                    <CardTitle className='text-xl'>{stat.title}</CardTitle>
                    <CardDescription className='text-base'>{stat.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <Button asChild size='lg' className='group rounded-lg text-base has-[>svg]:px-6'>
              <a href='#'>
                {content.about.readMore}
                <ArrowRightIcon className='transition-transform duration-200 group-hover:translate-x-0.5' />
              </a>
            </Button>
          </div>

          <img
            src='https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/about-us/image-8.png'
            alt='About Project9'
            className='h-full max-h-175 w-full rounded-md object-cover'
          />
        </div>

        {/* Feature cards */}
        <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
          {featureCards.map((feature, index) => (
            <Card key={index} className='rounded-lg shadow-none max-lg:last:col-span-full'>
              <CardHeader className='gap-3'>
                <CardTitle className='flex items-center gap-3 text-xl'>
                  <CheckCircleIcon />
                  {feature.title}
                </CardTitle>
                <CardDescription className='text-base'>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutProject9
