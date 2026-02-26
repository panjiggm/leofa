import { Badge } from '@/components/ui/badge'

import { MotionPreset } from '@/components/ui/motion-preset'
import { cn } from '@/lib/utils'

type GalleryImage = {
  src: string
  alt: string
  title: string
  className?: string
}[]

const products: GalleryImage = [
  {
    src: 'https://ik.imagekit.io/hiddenjems/Leofa/Gemini%20Generated%20Image.png',
    alt: 'Foam Bed',
    title: 'Leofa Foam Bed',
    className: 'col-span-2 row-span-2'
  },
  {
    src: 'https://ik.imagekit.io/hiddenjems/Leofa/image.png',
    alt: 'Microfiber & Wool Pad',
    title: 'Microfiber & Wool Pad'
  },
  {
    src: 'https://ik.imagekit.io/hiddenjems/Leofa/Gemini%20Generated%20Image%20(3).png',
    alt: 'Foam Pad',
    title: 'Foam Pad'
  },
  {
    src: 'https://ik.imagekit.io/hiddenjems/Leofa/Gemini%20Generated%20Image%20(1).png',
    alt: 'Compound',
    title: 'Compound',
    className: 'col-span-2 max-h-60'
  }
]

const ProductGallery = () => {
  return (
    <section className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='mb-12 space-y-4 text-center sm:mb-16 lg:mb-24'>
          <MotionPreset fade slide={{ direction: 'down', offset: 50 }} blur transition={{ duration: 0.5 }}>
            <Badge variant='outline' className='text-sm font-normal'>
              Gallery
            </Badge>
          </MotionPreset>

          <MotionPreset
            component='h2'
            className='text-2xl font-semibold md:text-3xl lg:text-4xl'
            fade
            slide={{ direction: 'down', offset: 50 }}
            blur
            transition={{ duration: 0.5 }}
            delay={0.3}
          >
            Our Work in Pictures
          </MotionPreset>

          <MotionPreset
            component='p'
            className='text-muted-foreground text-xl'
            fade
            blur
            slide={{ direction: 'down', offset: 50 }}
            delay={0.6}
            transition={{ duration: 0.5 }}
          >
            Explore our gallery to learn more about our amazing products and their features.
          </MotionPreset>
        </div>

        {/* Gallery Grid */}
        <div className='grid grid-cols-2 gap-6 md:grid-cols-4'>
          {products.map((image, index) => (
            <MotionPreset
              key={index}
              className={cn('group relative overflow-hidden rounded-lg', image.className)}
              fade
              blur
              slide={{ direction: 'down', offset: 15 }}
              transition={{ duration: 0.8 }}
              delay={0.9 + index * 0.15}
            >
              <img
                src={image.src}
                alt={image.alt}
                className='h-full w-full object-cover transition-transform duration-300 group-hover:scale-105'
              />
              <div className='absolute inset-0 bg-linear-to-t from-black/60 to-transparent' />
              <div className='absolute bottom-0 left-0 w-full p-4 text-white'>
                <h3 className='text-lg font-semibold'>{image.title}</h3>
              </div>
            </MotionPreset>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductGallery
