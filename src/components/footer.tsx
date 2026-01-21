import { Phone, Mail, MapPin } from 'lucide-react'
import { useLocation, useParams } from '@tanstack/react-router'
import { getIntlayer } from 'intlayer'

import logoLeofaWhite from '@/assets/images/logo-leofa-white.png'
import facebookIcon from '@/assets/social/facebook.svg'
import instagramIcon from '@/assets/social/instagram.svg'
import tiktokIcon from '@/assets/social/tiktok.svg'
import { Link, LinkComponentProps } from '@tanstack/react-router';

const socialLinks = [
  { name: 'Facebook', icon: facebookIcon, href: 'https://facebook.com/profile.php?id=61576288782392' },
  { name: 'Instagram', icon: instagramIcon, href: 'https://instagram.com/project9.official/' },
  { name: 'TikTok', icon: tiktokIcon, href: 'https://tiktok.com/@project9.official' },
]

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

const Footer = () => {
  const { pathname } = useLocation();
  const params = useParams({ strict: false });
  
  // Calculate locale from URL - will recalculate on every render when pathname changes
  const locale = getLocaleFromUrl(pathname, params);
  
  // Get content from server-side intlayer - will get fresh content for current locale
  const content = getIntlayer("home-page", locale);
  
  return (
    <footer className='bg-primary border-t border-primary/20'>
      <div className='relative mx-auto max-w-7xl overflow-hidden px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between gap-8 py-8 max-lg:flex-col sm:py-16 lg:py-24 lg:max-xl:gap-10'>
          <div className='flex max-w-95.5 flex-col gap-8 max-lg:gap-6'>
            <Link to='/{-$locale}' className='flex items-center gap-3'>
              <img 
                src={logoLeofaWhite} 
                alt="PT. LEOFA INTEGRITAS PERKASA" 
                className="h-auto w-auto max-h-16 object-contain"
              />
            </Link>

            <div className='flex flex-col gap-8 max-lg:gap-4'>
              <div className='space-y-4'>
                <div className='flex items-start gap-3'>
                  <Phone className='text-white/70 size-5 mt-0.5 shrink-0' />
                  <a href='tel:+6282128551500' className='text-white/70 hover:text-white transition-colors'>
                    +62821-2855-1500
                  </a>
                </div>
                <div className='flex items-start gap-3'>
                  <Mail className='text-white/70 size-5 mt-0.5 shrink-0' />
                  <a href='mailto:office@leofaintegritas.co.id' className='text-white/70 hover:text-white transition-colors'>
                    office@leofaintegritas.co.id
                  </a>
                </div>
                <div className='flex items-start gap-3'>
                  <MapPin className='text-white/70 size-5 mt-0.5 shrink-0' />
                  <p className='text-white/70'>
                    Jl. Rimpak Wetan, Kel. Sindangasih, Kec. Sindang Jaya, Kab. Tangerang, Provinsi Banten
                  </p>
                </div>
              </div>

              {/* Social Media Icons */}
              <div className='flex items-center gap-4'>
                {socialLinks.map((social) => (
                  <a 
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className='group flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300'
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
          </div>
          <div className='grid gap-8 sm:grid-cols-2 lg:max-xl:gap-6 xl:min-w-172'>
            <div className='flex flex-col gap-8'>
              <span className='text-white/70 pl-18 max-lg:pl-18 md:text-lg lg:text-xl'>{content.footer.usefulLinks.title}</span>
              <ul className='space-y-8'>
                {content.footer.usefulLinks.items.map((item, index) => (
                  <li key={index} className='flex items-center gap-11 lg:max-xl:gap-7'>
                    <span className='text-white/70 w-7 md:text-lg lg:text-xl'>{String(index + 1).padStart(2, '0')}</span>
                    <Link to={`/{-$locale}${String(item.href)}` as LinkComponentProps["to"]} className='link-animated text-white text-2xl md:text-3xl lg:text-4xl hover:text-white/80'>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className='flex flex-col gap-8'>
              <span className='text-white/70 pl-18 max-lg:pl-18 md:text-lg lg:text-xl'>{content.footer.pages.title}</span>
              <ul className='space-y-8'>
                {content.footer.pages.items.map((item, index) => (
                  <li key={index} className='flex items-center gap-11 lg:max-xl:gap-7'>
                    <span className='text-white/70 w-7 md:text-lg lg:text-xl'>{String(index + 1).padStart(2, '0')}</span>
                    <Link to={`/{-$locale}${String(item.href)}` as LinkComponentProps["to"]} className='link-animated text-white text-2xl md:text-3xl lg:text-4xl hover:text-white/80'>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-4 py-6 md:flex-row md:justify-between md:items-center'>
            <span className='font-light text-white/70 text-sm md:text-base'>
              {String(content.footer.copyright).replace(/\{year\}/g, String(new Date().getFullYear()))}
            </span>

            <div className='text-white/70 flex flex-wrap items-center gap-4 md:gap-6 md:justify-end'>
          <Link to='/{-$locale}/terms-conditions' className='hover:text-white font-light underline transition-colors duration-300 text-sm md:text-base'>
            {content.footer.terms}
          </Link>
          <Link to='/{-$locale}/privacy-policy' className='hover:text-white font-light underline transition-colors duration-300 text-sm md:text-base'>
            {content.footer.privacy}
          </Link>
        </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer