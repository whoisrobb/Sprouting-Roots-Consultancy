"use client";

import Cta from '@/components/elements/cta';
import useSplitPara from '@/hooks/use-split-para';
import React, { useRef } from 'react'

const p1 = "We offer hands-on and virtual workshops for individuals, families, schools, nonprofits, and community groups, focusing on teaching sustainable gardening techniques that anyone can learn. These workshops are great for school learning gardens or as family-friendly activities to get everyone involved in growing their own food."

const Workshops = () => {
    const ref = useRef(null);
    const paragraph = useSplitPara(p1, ref);

  return (
    <div className='py-12 px-4'>
        <h1 className="uppercase font-bold">WORKSHOPS & COMMUNITY EDUCATION</h1>
    
        <div className="space-y-4 flex gap-4 lg:flex-row flex-col justify-between w-full items-start" ref={ref}>
            <p className="leading-tight tracking-tight flex flex-wrap gap-x-2">
                {paragraph}
            </p>
        </div>

        <Cta />
    </div>
  )
}

export default Workshops
