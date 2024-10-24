import React from 'react'
import Landing from './_components/landing'
import WhoWeAre from './_components/who-we-are'
// import StaggeredGrid from './_components/motion-images'
import GardenGoodness from './_components/garden-goodness'

const Home = () => {
  return (
    <div className=''>
      <Landing />
      <WhoWeAre />
      {/* <StaggeredGrid /> */}
      <GardenGoodness />
    </div>
  )
}

export default Home
