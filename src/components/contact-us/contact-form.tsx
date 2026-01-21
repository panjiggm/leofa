'use client'

import { SendIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'

type FormContent = {
  name: {
    label: string
    placeholder: string
  }
  email: {
    label: string
    placeholder: string
  }
  company: {
    label: string
    placeholder: string
  }
  phone: {
    label: string
    placeholder: string
  }
  message: {
    label: string
    placeholder: string
  }
  industries: {
    label: string
    options: {
      mattress: string
      sofa: string
      automotive: string
      fashion: string
    }
  }
  submit: string
}

type ContactFormProps = {
  content: FormContent
}

const ContactForm = ({ content }: ContactFormProps) => {
  return (
    <form className='space-y-6' onSubmit={e => e.preventDefault()}>
      {/* Name Input */}
      <div className='space-y-2'>
        <Label htmlFor='name'>{content.name.label}</Label>
        <Input 
          type='text' 
          id='name' 
          placeholder={String(content.name.placeholder)} 
          className='h-10' 
        />
      </div>

      {/* Email Input */}
      <div className='space-y-2'>
        <Label htmlFor='email'>{content.email.label}</Label>
        <Input 
          type='email' 
          id='email' 
          placeholder={String(content.email.placeholder)} 
          className='h-10' 
        />
      </div>

      {/* Company Input */}
      <div className='space-y-2'>
        <Label htmlFor='company'>{content.company.label}</Label>
        <Input 
          type='text' 
          id='company' 
          placeholder={String(content.company.placeholder)} 
          className='h-10' 
        />
      </div>

      {/* Phone Input */}
      <div className='space-y-2'>
        <Label htmlFor='phone'>{content.phone.label}</Label>
        <Input 
          type='tel' 
          id='phone' 
          placeholder={String(content.phone.placeholder)} 
          className='h-10' 
        />
      </div>

      {/* Message Input */}
      <div className='space-y-2'>
        <Label htmlFor='message'>{content.message.label}</Label>
        <Textarea 
          id='message' 
          placeholder={String(content.message.placeholder)} 
          className='min-h-24 resize-none' 
        />
      </div>

      {/* Industries Section */}
      <div className='space-y-4'>
        <Label className='text-base font-medium'>{content.industries.label}</Label>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-6'>
          <div className='flex items-center space-x-2'>
            <Checkbox className='size-5' id='mattress' />
            <Label htmlFor='mattress' className='text-sm font-normal cursor-pointer'>
              {content.industries.options.mattress}
            </Label>
          </div>
          <div className='flex items-center space-x-2'>
            <Checkbox className='size-5' id='sofa' />
            <Label htmlFor='sofa' className='text-sm font-normal cursor-pointer'>
              {content.industries.options.sofa}
            </Label>
          </div>
          <div className='flex items-center space-x-2'>
            <Checkbox className='size-5' id='automotive' />
            <Label htmlFor='automotive' className='text-sm font-normal cursor-pointer'>
              {content.industries.options.automotive}
            </Label>
          </div>
          <div className='flex items-center space-x-2'>
            <Checkbox className='size-5' id='fashion' />
            <Label htmlFor='fashion' className='text-sm font-normal cursor-pointer'>
              {content.industries.options.fashion}
            </Label>
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <Button type='submit' size='lg' className='w-full rounded-lg font-medium has-[>svg]:px-6'>
        {content.submit}
        <SendIcon />
      </Button>
    </form>
  )
}

export default ContactForm
