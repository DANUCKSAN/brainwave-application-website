import React from 'react'
import Headings from './Headings'
import Section from './Section'
import { check, service1, service2 } from '../assets'
import { brainwaveServices } from '../constants'
import Generating from './Generating'
import PhotoChatMessage from './PhotoChatMessage'

const Services = () => {
  return (
    <Section id='how-to-use'>
        <div className='container'>
            <Headings title="Generative AI made for creators." text="Brainwave unlocks the full potential of generative AI, empowering creators to bring their ideas to life with ease and creativity."/>
                 <div className="relative m-8">
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
          <div className='absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto'>
            <img src={service1} className='w-full h-full object-cover md:object-right' width={800} height={730} alt='smartest-AI'/>
          
          
          </div>
          <div className='relative z-1 max-w-[17rem]  ml-auto'>
            <h4 className='h3 mb-4'>The smartest AI chat app for creators.</h4>
            <p className='body-2 text-n-4 mb-6'>Brainwave is the smartest AI chat app designed specifically for creators. It understands your creative needs and provides intelligent suggestions, making it easier than ever to bring your ideas to life.</p>
            
             <ul className="body-2">
                {brainwaveServices.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    <img width={24} height={24} src={check} />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
                
                
             
          </div>

          <Generating className="absolute right-4 bottom-4 left-4 border border-n-1/10 lg:left-1/2 lg:right-auto lg:bottom-8 lg:-translate-x-1/2" />

           
        </div>
         <div className='realative z-1 grid gap-5 lg:grid-cols-2'>
          <div className='relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden'>
          <img src={service2} className='w-full h-full object-cover' width={630} height={750} alt='smartest-AI'/>
          
          </div>
           <div className='absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15'>
            <h4 className='h4 mb-4'>Smartest AI</h4>
            <p className='body-2 mb-[3rem] text-n-3'>Brianwave is the smartest AI chat app for creators, designed to help you bring your ideas to life with ease and creativity.</p>
        
          </div>
          <PhotoChatMessage/>
        
        </div>
        </div>
       
        </div>
    </Section>
  )
}

export default Services
