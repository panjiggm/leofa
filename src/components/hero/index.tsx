import { ArrowUpRightIcon, ShieldCheckIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { useIntlayer } from 'react-intlayer'
import { Link } from '@tanstack/react-router'
import logoProject9 from '@/assets/images/logo-project-9.png'
import logoShinjiru from '@/assets/images/logo-shinjiru.png'

const HeroSection = () => {
  const content = useIntlayer("home-page");

  const subbrands = [
    {
      img: logoProject9,
      name: content.sub_brands.project9.name,
      title: content.sub_brands.project9.title,
      description: content.sub_brands.project9.description,
      badge: content.sub_brands.project9.badge,
      link: content.sub_brands.project9.link,
      qualityLabel: content.sub_brands.project9.qualityLabel,
    },
    {
      img: logoShinjiru,
      name: content.sub_brands.shinjiru.name,
      title: content.sub_brands.shinjiru.title,
      description: content.sub_brands.shinjiru.description,
      badge: content.sub_brands.shinjiru.badge,
      link: content.sub_brands.shinjiru.link,
      qualityLabel: content.sub_brands.shinjiru.qualityLabel,
    },
  ];

  return (
    <section className='bg-muted pt-32 pb-12 sm:pb-16 lg:pb-24'>
      <div className='mx-auto flex h-full max-w-7xl flex-col gap-16 px-4 sm:px-6 lg:px-8'>
        {/* Hero Header */}
        <div className='flex max-w-4xl flex-col items-center gap-4 self-center text-center'>
          <Badge variant='outline' className='text-sm font-normal'>
            {content.hero.badge}
          </Badge>
          <h1 className='text-3xl leading-[1.29167] font-semibold text-balance sm:text-4xl lg:text-5xl'>
            {content.hero.heading}
          </h1>
          <p className='text-muted-foreground mx-auto max-w-2xl text-xl'>
            {content.hero.description}
          </p>
          <div className='z-10 flex items-center gap-3 p-2'>
            <Button
              size='lg'
              className='p-6 relative w-fit overflow-hidden rounded-xl text-base before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.5)_50%,transparent_75%,transparent_100%)] before:bg-size-[250%_250%,100%_100%] before:bg-position-[200%_0,0_0] before:bg-no-repeat before:transition-[background-position_0s_ease] before:duration-1000 hover:before:bg-position-[-100%_0,0_0] has-[>svg]:px-6 dark:before:bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.2)_50%,transparent_75%,transparent_100%)]'
            >
              {content.hero.ctaButton}
            </Button>
          </div>
        </div>

        {/* Sub Brands Section */}
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
          {subbrands.map((brand, index) => (
            <Card key={`${brand.name}-${index}`} className='group py-0 shadow-none hover:shadow-md transition-shadow duration-300'>
              <CardContent className='grid grid-cols-1 px-0 xl:grid-cols-2'>
                <div className='p-6'>
                  <div className='h-59.5 w-full overflow-hidden rounded-lg'>
                    <img
                      src={brand.img}
                      alt={String(brand.name)}
                      className='w-full h-full object-contain transition-transform duration-300 group-hover:scale-105'
                    />
                  </div>
                </div>
                <div className='flex flex-col justify-center gap-4 p-6'>
                  <div className='flex items-center justify-between'>
                  <h3 className='text-xl font-black text-muted-foreground'>{brand.name}</h3>
                    <Badge className='bg-primary/10 text-primary border-0 text-sm'>
                      {brand.badge}
                    </Badge>
                  </div>
                  <h4 className='text-xl font-medium text-foreground'>{brand.title}</h4>
                  <p className='text-muted-foreground font-medium leading-relaxed line-clamp-2'>
                    {brand.description}
                  </p>
                  <div className='flex w-full items-center justify-between gap-1 pt-2'>
                    <div className='flex items-center gap-1'>
                      <ShieldCheckIcon className='size-4 text-green-600' />
                      <p className='text-sm text-green-600'>
                        {brand.qualityLabel}
                      </p>
                    </div>
                    <Button
                      size='icon'
                      variant='outline'
                      className='group-hover:bg-primary hover:bg-primary hover:text-primary-foreground group-hover:text-primary-foreground group-hover:border-transparent hover:border-transparent'
                      asChild
                    >
                      <Link to={String(brand.link)}>
                        <ArrowUpRightIcon />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HeroSection
