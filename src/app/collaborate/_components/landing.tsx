import Cta from '@/components/elements/cta'
import { Separator } from '@/components/ui/separator'
import React from 'react'

const Landing = () => {
  return (
    <div className='h-screen px-4 pt-24 pb-4 flex flex-col justify-between'>
      <div className="md:space-y-12 md:m-0 space-y-8 mt-24">
        <p className="uppercase">Work with Chris</p>
        <h1 className="md:text-7xl text-3xl font-extrabold tracking-tight">Personalized, Sustainable Solutions<br />from Seed to Harvest</h1>
      </div>
      <div className="">
        <Cta />
        <Separator />
      </div>
    </div>
  )
}

export default Landing
