import Cta from '@/components/elements/cta'
import { Separator } from '@/components/ui/separator'
import React from 'react'

const Landing = () => {
  return (
    <div className='h-screen px-4 pt-24 pb-4 flex flex-col justify-between'>
      <div className="space-y-12">
        <p className="uppercase">About sprouting roots</p>
        <h1 className="text-7xl font-extrabold tracking-tight">The goal is<br/>to empower you to GROW<br/>nutritious sustainable food!</h1>
      </div>
      <div className="">
        <Cta />
        <Separator />
      </div>
    </div>
  )
}

export default Landing
