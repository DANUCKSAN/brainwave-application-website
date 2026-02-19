import React from 'react'
import Section from './Section'
import Headings from './Headings'
import { benefits } from '../constants'

const Benefits = () => {
  return (
   <Section className="relative" id="benefits">
    <div className="container relative z-1">
   <Headings className="md:max-w-md lg:max-w-2xl" title="Chat Smarter, Not Harder with Brainwave" />
   <div className='flex flex-wrap gap-10 mb-10'>
    {benefits.map((benefit) => (
      <div key={benefit.id} className='flex-1 min-w-[18rem] max-w-[22rem] p-6 rounded-2xl bg-n-8/40 backdrop-blur border border-n-1/10' style={{backgroundImage: `url(${benefit.bg})`}}>
        <h3 className='h3 mb-4'>{benefit.title}</h3>
        <p className='body-1 text-n-2'>{benefit.text}</p>
      </div>
    ))}
   </div>
    </div>

   </Section>
  )
}

export default Benefits
