"use client";

import Cta from '@/components/elements/cta';
import useSplitPara from '@/hooks/use-split-para';
import React, { useRef } from 'react'
import { motion, useInView } from "framer-motion"

const p1 = "Gardening is a family and community affair at Sprouting Roots Consulting! We will help families select the best garden beds or containers for their backyards and teach them how to maintain and grow their gardens together. Gardening brings families closer and provides a shared experience that’s rewarding and fun for all ages. You get to eat what you grow!"

const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
}

const staggerChildren = {
    animate: {
        transition: {
        staggerChildren: 0.1
        }
    }
}

const FamilyProjects = () => {
    const container = useRef(null);
    const ref = useRef(null);

    const inView = useInView(container);
    const paragraph = useSplitPara(p1, ref);

  return (
    <div className='py-12 px-4'>
        <h1 className="uppercase font-bold">On-Site Family Projects <span className="italic">(within 50 mile radius)</span></h1>
    
        <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
            <div className="space-y-4 flex gap-4 lg:flex-row flex-col justify-between w-full items-start" ref={ref}>
                <p className="leading-tight tracking-tight flex flex-wrap gap-x-2">
                    {paragraph}
                </p>
            </div>

            <div className="">
                <p className="">We offer</p>

                <motion.ul
                    variants={staggerChildren}
                    initial="initial"
                    // animate={inView ? "animate": ""}
                    whileInView={"animate"}
                    className='px-8'
                >
                    <motion.li
                        variants={fadeIn}
                        className={"list-disc"}
                    >
                        An array of workshops to get you up and growing from seed to plate
                    </motion.li>
                    
                    <motion.li variants={fadeIn} className={"list-disc"}>
                        Help plan your on-site garden bed installation and setup
                    </motion.li>
                    <motion.li variants={fadeIn} className={"list-disc"}>
                        Tailored planting plans for your family’s favorite vegetables
                    </motion.li>
                    <motion.li variants={fadeIn} className={"list-disc"}>
                        Ongoing garden care support and troubleshooting
                    </motion.li>
                    <motion.li variants={fadeIn} className={"list-disc"}>
                        Organic practices for beginners: Vegetable Gardening 101 Workshop
                    </motion.li> 
                    <motion.li variants={fadeIn} className={"list-disc"}>
                        Creating and maintaining school gardens and STEAM lessons
                    </motion.li>
                    <motion.li variants={fadeIn} className={"list-disc"}>
                        Sustainable food-growing techniques for any space
                    </motion.li>
                </motion.ul>
            </div>
        </div>
    </div>
  )
}

export default FamilyProjects
