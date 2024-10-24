"use client";

import React from 'react'
import Landing from './_components/landing'
import Intro from './_components/intro'
import { Separator } from '@/components/ui/separator'
import Story from './_components/story'
import { GardeningBento } from './_components/gardening-bento';

const About = () => {
  return (
    <div>
      <Landing />
      <Intro />
      <Separator />
      <Story />
      <Separator />
      <GardeningBento />
    </div>
  )
}

export default About
