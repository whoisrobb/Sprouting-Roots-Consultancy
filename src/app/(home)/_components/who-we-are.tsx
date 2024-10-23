"use client";

import useSplitPara from '@/hooks/use-split-para';
import React, { useRef } from 'react';
import Cta from '../../../components/elements/cta';

const p1 = "Whether you’re a new gardener eager to plant your first seeds, a teacher wanting to start a STEAM learning garden, or an organization introducing the benefits of healthy eating to those you serve, we offer expert guidance tailored to your needs. We have a passion for growing sustainable food and reconnecting with nature through vegetable gardening.";

const WhoWeAre = () => {
    const description = useRef(null);
    const paragraph = useSplitPara(p1, description);
  return (
    <div className='grid grid-cols-4 p-4'>
        <div className="">
            <h1 className="uppercase">Who we are</h1>
        </div>

        <div className="col-span-3 space-y-8" ref={description}>
            <div className="space-y-4 flex gap-4 lg:flex-row flex-col justify-between w-full items-start">
                <p className="text-5xl font-bold leading-tight tracking-tight flex flex-wrap gap-x-2">
                    {paragraph}
                </p>
            </div>

            <Cta />
        </div>
    </div>
  )
}

export default WhoWeAre
