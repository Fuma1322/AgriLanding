'use client'

import Hero from '@/components/FrontEnd/Hero'
import Service from '@/components/FrontEnd/OurService'
import Story from '@/components/FrontEnd/OurStory'
import React from 'react'

export default function page() {
  return (
    <div>
      <Hero />
      <Story />
      <Service />
      {/* <Footer /> */}
    </div>
  )
}