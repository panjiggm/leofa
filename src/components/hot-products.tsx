import { useEffect, useRef, useState } from 'react'
import Autoplay from 'embla-carousel-autoplay'
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '@/components/ui/carousel'
import { cn } from '@/lib/utils'
import { useIntlayer } from 'react-intlayer'

const hotProductsImages = [
    'https://ik.imagekit.io/hiddenjems/Leofa/Foam%20Pad/Foam%20Pad/IMG_0081.HEIC?updatedAt=1768187622927',
    'https://ik.imagekit.io/hiddenjems/Leofa/Foam%20Pad/Foam%20Pad/IMG_0052.HEIC?updatedAt=1768187622995',
    'https://ik.imagekit.io/hiddenjems/Leofa/Foam%20Pad/Foam%20Pad/IMG_0058.HEIC?updatedAt=1768187618594',
    'https://ik.imagekit.io/hiddenjems/Leofa/Microfiber%20Pad/Microfiber%20Pad/IMG_0108.HEIC?updatedAt=1768188125144',
    'https://ik.imagekit.io/hiddenjems/Leofa/Wool%20Pad/Wool%20Pad/IMG_0111.HEIC?updatedAt=1768189544644',
    'https://ik.imagekit.io/hiddenjems/Leofa/Compound%20New/Kompon%20baru/IMG_0638.heic?updatedAt=1768190373319',
    'https://ik.imagekit.io/hiddenjems/Leofa/Compound%20New/Kompon%20baru/IMG_0645.heic?updatedAt=1768190373005',
    'https://ik.imagekit.io/hiddenjems/Leofa/Compounds/Compound/IMG_0018.HEIC?updatedAt=1768187453739',
    'https://ik.imagekit.io/hiddenjems/Leofa/Compounds/Compound/IMG_0020.HEIC?updatedAt=1768187453457',
    'https://ik.imagekit.io/hiddenjems/Leofa/Compounds/Compound/IMG_0006.HEIC?updatedAt=1768187453811',
    // 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/gallery/image-74.png',
    // 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/gallery/image-75.png'
  ]

const HotProducts = () => {
    const content = useIntlayer("home-page");

  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    setCurrent(api.selectedScrollSnap())

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }))

  return (
    <section className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='mb-12 space-y-4 sm:mb-16 lg:mb-24'>
          <h2 className='text-2xl font-semibold sm:text-3xl lg:text-4xl'>{content.hot_products.title}</h2>
          <p className='text-muted-foreground text-xl'>
            {content.hot_products.description}
          </p>
        </div>

        <div className='mx-auto'>
          <Carousel
            setApi={setApi}
            plugins={[plugin.current]}
            opts={{
              align: 'center',
              loop: true
            }}
            className='relative flex items-center justify-center gap-6'
          >
            <CarouselContent className='h-89 items-center'>
              {hotProductsImages.map((image, index) => (
                <CarouselItem key={index} className='flex justify-center sm:basis-1/3 lg:basis-1/5'>
                  <div className='w-full overflow-hidden p-1'>
                    <img
                      className={cn('mx-auto h-87 w-auto rounded-lg transition-all duration-600 sm:h-71 sm:w-full', {
                        'sm:h-87': current === index,
                        'sm:h-78.5':
                          current === 0
                            ? index === hotProductsImages.length - 1 || current + 1 === index
                            : current === hotProductsImages.length - 1
                              ? current - 1 === index || index === 0
                              : current - 1 === index || current + 1 === index
                      })}
                      src={image}
                      alt={`Gallery image ${index + 1}`}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  )
}

export default HotProducts
