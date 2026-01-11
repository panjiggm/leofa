import { GithubIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from 'lucide-react'

import logoLeofaWhite from '@/assets/images/logo-leofa-white.png'

const Footer = () => {
  return (
    <footer className='bg-primary border-t border-primary/20'>
      <div className='relative mx-auto max-w-7xl overflow-hidden px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between gap-8 py-8 max-lg:flex-col sm:py-16 lg:py-24 lg:max-xl:gap-10'>
          <div className='flex max-w-95.5 flex-col gap-8 max-lg:gap-6'>
            <a href='#' className='flex items-center gap-3'>
              <img 
                src={logoLeofaWhite} 
                alt="PT. LEOFA INTEGRITAS PERKASA" 
                className="h-auto w-auto max-h-16 object-contain"
              />
            </a>

            <div className='flex flex-col gap-8 max-lg:gap-4'>
              <div>
                <p className='text-lg font-medium text-white'>Subscribe to newsletter</p>
                <p className='text-white/70'>
                  Have questions or need assistance? Get in touch with our team for personalised support.
                </p>
              </div>

              <div className='flex items-center gap-4'>
                <a href='#' target='#'>
                  <GithubIcon className='text-white/70 hover:text-white size-5 transition-colors' />
                </a>
                <a href='#' target='#'>
                  <InstagramIcon className='size-5 text-white/70 hover:text-white transition-colors' />
                </a>
                <a href='#' target='#'>
                  <TwitterIcon className='size-5 text-white/70 hover:text-white transition-colors' />
                </a>
                <a href='#' target='#'>
                  <YoutubeIcon className='text-white/70 hover:text-white size-5 transition-colors' />
                </a>
              </div>
            </div>
          </div>
          <div className='grid gap-8 sm:grid-cols-2 lg:max-xl:gap-6 xl:min-w-172'>
            <div className='flex flex-col gap-8'>
              <span className='text-white/70 pl-18 max-lg:pl-18 md:text-lg lg:text-xl'>Useful links</span>
              <ul className='space-y-8'>
                <li className='flex items-center gap-11 lg:max-xl:gap-7'>
                  <span className='text-white/70 w-7 md:text-lg lg:text-xl'>01</span>
                  <a href='#' className='link-animated text-white text-2xl md:text-3xl lg:text-4xl hover:text-white/80'>
                    Career
                  </a>
                </li>
                <li className='flex items-center gap-11 lg:max-xl:gap-7'>
                  <span className='text-white/70 w-7 md:text-lg lg:text-xl'>02</span>
                  <a href='#' className='link-animated text-white text-2xl md:text-3xl lg:text-4xl hover:text-white/80'>
                    Help
                  </a>
                </li>
                <li className='flex items-center gap-11 lg:max-xl:gap-7'>
                  <span className='text-white/70 w-7 md:text-lg lg:text-xl'>03</span>
                  <a href='#' className='link-animated text-white text-2xl md:text-3xl lg:text-4xl hover:text-white/80'>
                    Works
                  </a>
                </li>
              </ul>
            </div>

            <div className='flex flex-col gap-8'>
              <span className='text-white/70 pl-18 max-lg:pl-18 md:text-lg lg:text-xl'>Pages</span>
              <ul className='space-y-8'>
                <li className='flex items-center gap-11 lg:max-xl:gap-7'>
                  <span className='text-white/70 w-7 md:text-lg lg:text-xl'>01</span>
                  <a href='#' className='link-animated text-white text-2xl md:text-3xl lg:text-4xl hover:text-white/80'>
                    Features
                  </a>
                </li>
                <li className='flex items-center gap-11 lg:max-xl:gap-7'>
                  <span className='text-white/70 w-7 md:text-lg lg:text-xl'>02</span>
                  <a href='#' className='link-animated text-white text-2xl md:text-3xl lg:text-4xl hover:text-white/80'>
                    Use cases
                  </a>
                </li>
                <li className='flex items-center gap-11 lg:max-xl:gap-7'>
                  <span className='text-white/70 w-7 md:text-lg lg:text-xl'>03</span>
                  <a href='#' className='link-animated text-white text-2xl md:text-3xl lg:text-4xl hover:text-white/80'>
                    About us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

              <div className='flex flex-col gap-4 py-6 md:flex-row md:justify-between md:items-center'>
                  <span className='font-light text-white/70 text-sm md:text-base'>© Leofa {new Date().getFullYear()}. All rights reserved.</span>

                  <div className='text-white/70 flex flex-wrap items-center gap-4 md:gap-6 md:justify-end'>
          <a href='#' className='hover:text-white font-light underline transition-colors duration-300 text-sm md:text-base'>
            Terms & condition
          </a>
          <a href='#' className='hover:text-white font-light underline transition-colors duration-300 text-sm md:text-base'>
            Privacy policy
          </a>
        </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer