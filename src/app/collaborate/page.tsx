import React from 'react'
import Landing from './_components/landing'
import Intro from './_components/intro'
import Services from './_components/services'
import { Separator } from '@/components/ui/separator'
import Workshops from './_components/workshops'
import FamilyProjects from './_components/family-projects'

const Collaborate = () => {
  return (
    <div>
      <Landing />
      <Intro />
      <Separator />
      <Services />
      <Separator />
      <Workshops />
      <Separator />
      <FamilyProjects />
    </div>
  )
}

export default Collaborate
