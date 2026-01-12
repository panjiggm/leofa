import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { MotionPreset } from '@/components/ui/motion-preset'
import { useIntlayer } from 'react-intlayer'
import { Link } from '@tanstack/react-router'

const AboutUs = () => {
  const content = useIntlayer("home-page");

  const tabs = [
    {
      name: content.about_us.ourStory.name,
      value: 'our-story',
      content: {
        image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/about-us/image-6.png',
        title: content.about_us.ourStory.title,
        description: content.about_us.ourStory.description,
        buttonText: content.about_us.ourStory.buttonText,
        buttonLink: content.about_us.ourStory.buttonLink,
      }
    },
    {
      name: content.about_us.ourMission.name,
      value: 'our-mission',
      content: {
        image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/about-us/image-15.png',
        title: content.about_us.ourMission.title,
        description: content.about_us.ourMission.description,
        buttonText: content.about_us.ourMission.buttonText,
        buttonLink: content.about_us.ourMission.buttonLink,
      }
    },
    {
      name: content.about_us.ourVision.name,
      value: 'our-vision',
      content: {
        image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/about-us/image-16.png',
        title: content.about_us.ourVision.title,
        description: content.about_us.ourVision.description,
        buttonText: content.about_us.ourVision.buttonText,
        buttonLink: content.about_us.ourVision.buttonLink,
      }
    }
  ]

  return (
    <section className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='mb-6 space-y-4 text-center mx-auto max-w-4xl'>
          <MotionPreset fade blur slide={{ direction: 'down', offset: 30 }} transition={{ duration: 0.5 }}>
            <Badge className='text-sm font-normal' variant='outline'>
              {content.about_us.badge}
            </Badge>
          </MotionPreset>
          <MotionPreset fade blur slide={{ direction: 'down', offset: 30 }} delay={0.2} transition={{ duration: 0.5 }}>
            <p className='text-muted-foreground text-xl'>
              {content.about_us.headerDescription}
            </p>
          </MotionPreset>
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

          {tabs.map(tab => {
            const tabName = String(tab.name);
            return (
              <TabsContent key={tab.value} value={tab.value}>
                <div className='grid grid-cols-1 items-center gap-16 lg:grid-cols-2'>
                  <MotionPreset fade blur slide={{ direction: 'right', offset: 50 }} delay={0.1} transition={{ duration: 0.6 }}>
                    <img
                      src={tab.content.image}
                      alt={tabName}
                      className='h-full max-h-91 min-h-52 w-full rounded-lg object-cover'
                    />
                  </MotionPreset>

                  <MotionPreset fade blur slide={{ direction: 'left', offset: 50 }} delay={0.2} transition={{ duration: 0.6 }}>
                    <div className='space-y-6'>
                      <h3 className='text-xl font-semibold'>{tab.content.title}</h3>
                      <p className='text-muted-foreground text-base leading-relaxed'>{tab.content.description}</p>
                      <Button size='lg' asChild>
                        <Link to={String(tab.content.buttonLink)}>{tab.content.buttonText}</Link>
                      </Button>
                    </div>
                  </MotionPreset>
                </div>
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </section>
  )
}

export default AboutUs
