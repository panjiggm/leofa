import { useLocation, useParams } from '@tanstack/react-router'
import { getIntlayer } from 'intlayer'

import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import BlurText from '@/components/ui/blur-text'

import { MotionPreset } from '@/components/ui/motion-preset'
import { Marquee } from '@/components/ui/marquee'
import ContactForm from './contact-form'

import facebookIcon from '@/assets/social/facebook.svg'
import instagramIcon from '@/assets/social/instagram.svg'
import tiktokIcon from '@/assets/social/tiktok.svg'
import logoProject9 from '@/assets/images/logo-project-9.png'
import logoShinjiru from '@/assets/images/logo-shinjiru.png'

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

const socialLinks = [
  { name: 'Facebook', icon: facebookIcon, href: 'https://facebook.com/profile.php?id=61576288782392' },
  { name: 'Instagram', icon: instagramIcon, href: 'https://instagram.com/project9.official/' },
  { name: 'TikTok', icon: tiktokIcon, href: 'https://tiktok.com/@project9.official' },
]

const partnerLogos = [
  {
    name: 'Project9',
    logo: logoProject9
  },
  {
    name: 'Shinjiru',
    logo: logoShinjiru
  }
]

const ContactDetail = () => {
  const { pathname } = useLocation();
  const params = useParams({ strict: false });
  
  const locale = getLocaleFromUrl(pathname, params);
  const content = getIntlayer("contact-page", locale);
  
  return (
    <section className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-6xl space-y-9 px-4 sm:px-6 lg:px-8'>
        {/* Header Section */}
        <div className='space-y-2.5'>
          <MotionPreset fade blur slide={{ direction: 'down', offset: 50 }} transition={{ duration: 0.5 }}>
            <Badge variant='outline' className='rounded-none px-1.5'>
              {content.hero.badge}
            </Badge>
          </MotionPreset>
          <div className='flex justify-between gap-4 max-md:flex-col'>
            <MotionPreset delay={0.3} transition={{ duration: 0.5 }} className='max-w-100'>
              <h2 className='text-2xl font-semibold sm:text-3xl lg:text-4xl'>
                <BlurText text={String(content.hero.heading)} delay={50} animateBy='words' direction='bottom' />
              </h2>
            </MotionPreset>
            <MotionPreset
              delay={0.3}
              fade
              blur
              slide={{ direction: 'down', offset: 50 }}
              transition={{ duration: 0.5 }}
            >
              <p className='text-muted-foreground max-w-150 text-xl'>
                {content.hero.subheading}
              </p>
            </MotionPreset>
          </div>
        </div>
        <div className='grid grid-cols-1 gap-6 lg:grid-cols-2'>
          {/* Left Side - Form */}
          <MotionPreset fade slide={{ direction: 'up', offset: 80 }} blur delay={0.3} transition={{ duration: 0.6 }}>
            <Card className='border shadow-sm'>
              <CardContent>
                {/* Form */}
                <ContactForm content={content.form} />
              </CardContent>
            </Card>
          </MotionPreset>

          {/* Right Side - Company Info */}
          <MotionPreset
            fade
            slide={{ direction: 'up', offset: 100 }}
            blur
            delay={0.4}
            transition={{ duration: 0.7 }}
            className='space-y-6'
          >
            {/* Company Image */}
            <div className='group relative overflow-hidden rounded-xl lg:rounded-3xl'>
              <img
                src='https://ik.imagekit.io/hiddenjems/Leofa/Leofa%20Foam/IMG_1249.HEIC?updatedAt=1768744823439'
                alt={String(content.companyInfo.name)}
                className='w-full max-h-[600px] object-cover transition-transform duration-500 group-hover:scale-105'
              />
              {/* Availability Badge */}
              <Badge
                variant='secondary'
                className='bg-card text-card-foreground absolute inset-x-1/2 bottom-0 flex -translate-x-1/2 items-center gap-1.5 rounded-t-sm rounded-b-none px-2.5 py-1.5 text-xs font-medium'
              >
                <span className='relative flex size-2'>
                  <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-green-600 opacity-75 dark:bg-green-400'></span>
                  <span className='relative inline-flex size-2 rounded-full bg-green-700 dark:bg-green-500'></span>
                </span>
                {content.companyInfo.availability}
              </Badge>
            </div>

            {/* Company Info */}
            <div className='space-y-3'>
              <div className='flex flex-col items-center justify-center gap-2 text-center'>
                <h3 className='text-xl font-semibold'>{content.companyInfo.name}</h3>
                <p className='text-muted-foreground text-base'>{content.companyInfo.tagline}</p>
              </div>

              {/* Social Links */}
              <div className='flex items-center justify-center gap-4'>
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='group flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 transition-all duration-300'
                    aria-label={social.name}
                  >
                    <img 
                      src={social.icon} 
                      alt={social.name} 
                      className='w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity duration-300'
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* Partner Logos */}
            <MotionPreset
              fade
              slide={{ direction: 'down', offset: 50 }}
              delay={0.9}
              transition={{ duration: 0.5 }}
              className='relative'
            >
              <div className='from-background pointer-events-none absolute inset-y-0 left-0 z-1 w-15 bg-linear-to-r via-85% to-transparent' />
              <div className='from-background pointer-events-none absolute inset-y-0 right-0 z-1 w-15 bg-linear-to-l via-85% to-transparent' />
              <div>
                <Marquee pauseOnHover duration={20} gap={2} className='*:items-center'>
                  {partnerLogos.map((partner, index) => (
                    <img
                      key={index}
                      src={partner.logo}
                      alt={partner.name}
                      className='h-16 w-auto shrink-0 object-contain'
                    />
                  ))}
                </Marquee>
              </div>
            </MotionPreset>
          </MotionPreset>
        </div>
      </div>
    </section>
  )
}

export default ContactDetail
