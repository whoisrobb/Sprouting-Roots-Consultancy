"use client";

import useSplitPara from '@/hooks/use-split-para';
import Image from 'next/image';
import React, { useRef } from 'react';

const p1 = "Sprouting Roots Consulting is more than just a vegetable gardening service and experience; we’re educators, advocates for sustainability, and community builders. We believe gardening isn’t just about growing food—it’s about cultivating relationships with the earth, each other, and the future.";
const p2 = "Do you dream of harvesting fresh herbs and vegetables from your own garden? Are you tired of paying high prices for fresh produce? Do you want to control how the food you eat is grown and cared for? Do you keep telling yourself that you don’t have a green thumb?"

const Intro = () => {
    const description = useRef(null);
    const paragraph = useSplitPara(p1, description);
    const paragraphTwo = useSplitPara(p2, description);
  return (
    <div className='grid md:grid-cols-4 px-4 gap-12 grid-cols-1 py-12 lg:h-screen'>
        <div className="col-span-3 space-y-8" ref={description}>
            <div className="space-y-4 flex gap-4 lg:flex-row flex-col justify-between w-full items-start">
                <p className="md:text-4xl text-3xl font-bold leading-tight tracking-tight flex flex-wrap gap-x-2">
                    {paragraph}
                </p>
            </div>
            
            <div className="col-span-3 space-y-8">
                <div className="space-y-4 flex gap-4 lg:flex-row flex-col justify-between w-full items-start">
                    <p className="leading-tight tracking-tight flex flex-wrap gap-x-2">
                        {paragraphTwo}
                    </p>
                </div>
            </div>
        </div>
        
        <div className="space-y-4 text-right">
            <h1 className="font-bold text-lg">Well, meet Chris.</h1>

            <div className="w-full aspect-[5/6] border border-black relative">
                <div className="h-full w-full overflow-hidden absolute top-3 right-2 ">
                    <Image
                        src={"https://utfs.io/f/q3DqUViB2Sv5FoLFfgZM9eb4NKB5kJZdH1wEADsXO7ifgR8x"}
                        height={500}
                        width={500}
                        className='h-full w-full object-cover'
                        alt='Chrischelle Madison'
                    />
                </div>
            </div>
        </div>

    </div>
  )
}

export default Intro;
