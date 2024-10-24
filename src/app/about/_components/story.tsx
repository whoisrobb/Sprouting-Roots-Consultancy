import useSplitPara from '@/hooks/use-split-para';
import Image from 'next/image';
import React, { useRef } from 'react';

const p1 = "She felt the same way.  Chris has been gardening for over a decade now. She started gardening when she was a stay at home mom and built her first raised bed with the help of her nephew."
const p2 = "With the first successful harvest, she was hooked! Her love of nature and Degree in Biology are a natural fit. With some trial and error, she got the knowledge needed to plan, grow, and maintain a healthy garden retreat year after year.  Gardening quickly turned into her passion and so now, she teaches others how to supplement their food source and grow their own food."
const p3 = "In 2015, she spearheaded a community garden with the help of some AWESOME friends and fantastic donors. Several years ago, she started consulting, volunteering and donated thousands of seeds to local schools that have STEAM and Learning gardens."
const p4 = "As the owner of Sprouting Roots Consulting, LLC, she wants to help you Cultivate your Green Thumb and grow in the space available to you. If you have limited space to grow, no problem, she can even teach you how to grow on a fence!"

const Story = () => {
    const description = useRef(null);
    const paragraphOne = useSplitPara(p1, description);
    const paragraphTwo = useSplitPara(p2, description);
    const paragraphThree = useSplitPara(p3, description);
    const paragraphFour = useSplitPara(p4, description);
  return (
    <div className='grid lg:grid-cols-2 grid-cols-1 gap-12 px-4 py-8 items-center'>
            
        {/* <div className=""> */}
            <div className="h-full aspect-square border border-black relative">
                <div className="h-full w-full overflow-hidden absolute top-3 right-2 ">
                    <Image
                        src={"https://utfs.io/f/q3DqUViB2Sv5Zg1nFo7uqxVNMnQXsm5ir4JGc2I7WPa1gUdz"}
                        height={500}
                        width={500}
                        className='h-full w-full object-cover'
                        alt='Chrischelle Madison'
                    />
                </div>
            </div>
        {/* </div> */}

        <div className="space-y-4">
        
            <div className="col-span-3 space-y-8">
                <div className="space-y-4 flex gap-4 lg:flex-row flex-col justify-between w-full items-start">
                    <p className="leading-tight tracking-tight flex flex-wrap gap-x-2">
                        {paragraphOne}
                    </p>
                </div>
            </div>
        
            <div className="col-span-3 space-y-8" ref={description}>
                <div className="space-y-4 flex gap-4 lg:flex-row flex-col justify-between w-full items-start">
                    <p className="leading-tight tracking-tight flex flex-wrap gap-x-2">
                        {paragraphTwo}
                    </p>
                </div>
            </div>
        
            <div className="col-span-3 space-y-8">
                <div className="space-y-4 flex gap-4 lg:flex-row flex-col justify-between w-full items-start">
                    <p className="leading-tight tracking-tight flex flex-wrap gap-x-2">
                        {paragraphThree}
                    </p>
                </div>
            </div>
        
            <div className="col-span-3 space-y-8">
                <div className="space-y-4 flex gap-4 lg:flex-row flex-col justify-between w-full items-start">
                    <p className="leading-tight tracking-tight flex flex-wrap gap-x-2">
                        {paragraphFour}
                    </p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Story
