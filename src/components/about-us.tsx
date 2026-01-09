import { ArrowRightIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'

const tabs = [
    {
      name: 'Our Story',
      value: 'our-story',
      content: {
        image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/about-us/image-6.png',
        title: 'Our story begins with a passion for excellence',
        description:
          "We started with a small team of dedicated professionals committed to making a difference. Through years of hard work and perseverance, we've grown into a community of innovators and problem-solvers. Our journey has been marked by continuous learning, adaptation, and a relentless pursuit of quality in everything we do.",
        buttonText: 'Learn More',
        buttonLink: '#'
      }
    },
    {
      name: 'Our Mission',
      value: 'our-mission',
      content: {
        image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/about-us/image-15.png',
        title: "We're all about creating awesome resources that help you succeed!",
        description:
          "We understand the immense importance of high-quality educational materials in fostering effective learning experiences. That's why we are deeply committed to supporting educators in their vital roles. Our mission is to provide our users with exceptional resources, comprehensive tools, and steadfast support, ensuring they have everything they need to thrive in their teaching endeavors. We believe that by empowering educators with the best materials and assistance, we can significantly enhance the learning journey for students everywhere.",
        buttonText: 'Get started',
        buttonLink: '#'
      }
    },
    {
      name: 'Our Vision',
      value: 'our-vision',
      content: {
        image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/about-us/image-16.png',
        title: 'Our vision is to transform how people learn and grow',
        description:
          'We envision a world where quality education is accessible to everyone, regardless of their background or circumstances. We strive to create innovative solutions that break down barriers to learning and enable individuals to reach their full potential. By combining cutting-edge technology with human-centered design, we aim to build a future where education is engaging, effective, and empowering for all.',
        buttonText: 'Discover more',
        buttonLink: '#'
      }
    }
  ]

const AboutUs = () => {
  return (
    <section className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='mb-6 space-y-4 text-center mx-auto max-w-4xl'>
          <Badge className='text-sm font-normal' variant='outline'>
            About Us
          </Badge>
          <p className='text-muted-foreground text-xl'>
            Our journey highlights the strength of collaboration and determination. Together, we have tackled obstacles,
            rejoiced in our successes, and crafted a tale of progress and achievement.
          </p>
        </div>

        <Tabs defaultValue='our-mission' className='items-center gap-12 md:gap-16 lg:gap-24'>
          <TabsList className='bg-background rounded-none border-b p-0'>
            {tabs.map(tab => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className='shadow-none bg-background data-[state=active]:border-primary dark:data-[state=active]:border-primary h-full rounded-none border-0 border-b-2 border-transparent px-3 text-base focus-visible:z-10 data-[state=active]:shadow-none dark:data-[state=active]:bg-transparent'
              >
                {tab.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {tabs.map(tab => (
            <TabsContent key={tab.value} value={tab.value}>
              <div className='grid grid-cols-1 items-center gap-16 lg:grid-cols-2'>
                <img
                  src={tab.content.image}
                  alt={tab.name}
                  className='h-full max-h-91 min-h-52 w-full rounded-lg object-cover'
                />

                <div className='space-y-6'>
                  <h3 className='text-xl font-semibold'>{tab.content.title}</h3>
                  <p className='text-muted-foreground text-base'>{tab.content.description}</p>
                  <Button size='lg' asChild>
                    <a href={tab.content.buttonLink}>{tab.content.buttonText}</a>
                  </Button>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}

export default AboutUs
