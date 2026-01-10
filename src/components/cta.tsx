import { ArrowRightIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { CardContent } from '@/components/ui/card'
import { Link } from '@tanstack/react-router'

const CTA = () => {
  return (
    <section className='bg-primary py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-5xl px-4 sm:px-6 lg:px-8'>
          <CardContent className='flex justify-between gap-6 max-lg:flex-col md:px-8 lg:items-center'>
            <div className='space-y-4'>
              <h2 className='text-primary-foreground text-2xl font-semibold md:text-3xl lg:text-4xl'>
                Ready to Dive Deeper?
              </h2>
              <p className='text-gray-400 text-lg md:text-xl'>
                Everything from setup to advanced features is covered in our docs.
              </p>
            </div>
            <div>
              <Button size='lg' variant='secondary' className='shrink-0 rounded-xl bg-warning hover:bg-warning/80 text-base p-5 has-[>svg]:px-6' asChild>
                <Link to='/contact' className='inline-flex items-center gap-2'>
                  View Docs
                  <ArrowRightIcon className='size-5' />
                </Link>
              </Button>
            </div>
          </CardContent>
      </div>
    </section>
  )
}

export default CTA
