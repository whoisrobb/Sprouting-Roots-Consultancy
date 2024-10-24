'use client'

import { Separator } from '@/components/ui/separator'
import useSplitPara from '@/hooks/use-split-para'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

const p1 = "We provide one-on-one consultations to help you plan, plant, and maintain your garden. Whether you have a small backyard, balcony, or a larger space, we'll guide you through creating a garden that fits your lifestyle, using raised beds, containers, or inground planting."
const p2 = "Our hands-on or virtual workshops bring gardening education to schools, nonprofits, and community groups. We teach the essentials of gardening, from seed to harvest, in a fun, interactive setting. These workshops are ideal for creating learning gardens at schools or as family activities, helping build lifelong skills and a connection to nature."
const p3 = "For families within a 50-mile radius, we offer on-site assistance to help set up garden beds that suit your space and preferences. Together, we'll plan and plant a garden, teaching you how to care for it and troubleshoot any challenges along the way. Gardening becomes a rewarding family bonding experience, creating lasting memories and fresh food for your table."

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

export default function Services () {

  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4 py-8">
        <motion.section
          initial="initial"
          animate="animate"
          variants={staggerChildren}
          className="mb-12"
        >
          <motion.h2 variants={fadeIn} className="text-2xl font-semibold mb-4">
            Customized Training Programs
          </motion.h2>
          <motion.p variants={fadeIn} className="mb-4">
            Whether you're interested in starting a container garden, raised bed, inground, school, or community garden, we guide you through the entire process. Our gardening consultants offer both in-person and virtual services, customizing plans to fit your unique needs. With one-on-one consultations, training, follow-ups, and maintenance plans, we help bring your garden vision to life—ensuring you're set up for success.
          </motion.p>
          <motion.p variants={fadeIn} className="mb-4">
            From planning to harvesting, we're with you every step of the way:
          </motion.p>
          <motion.ul variants={fadeIn} className="list-disc list-inside mb-4">
            <li>Plan</li>
            <li>Plant</li>
            <li>Grow</li>
            <li>Maintain</li>
            <li>Harvest</li>
          </motion.ul>
          <motion.div variants={fadeIn} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Image src="/placeholder.svg?height=200&width=300" alt="Planning" width={300} height={200} className="rounded-lg" />
            <Image src="/placeholder.svg?height=200&width=300" alt="Planting" width={300} height={200} className="rounded-lg" />
            <Image src="/placeholder.svg?height=200&width=300" alt="Harvesting" width={300} height={200} className="rounded-lg" />
          </motion.div>
        </motion.section>

        <Separator />
        <OurServices />

        <motion.p
          variants={fadeIn}
          initial="initial"
          animate="animate"
          className="text-lg font-semibold text-center"
        >
          No matter your garden vision, we guide you step by step to create a customized, thriving garden just for you.
        </motion.p>
      </main>
    </div>
  )
}

const OurServices = () => {
    const ref = useRef(null);

    const pOneRef = useRef(null);
    const pTwoRef = useRef(null);
    const pThreeRef = useRef(null);

    const inView = useInView(ref);

    const paraOne = useSplitPara(p1, pOneRef);
    const paraTwo = useSplitPara(p2, pTwoRef);
    const paraThree = useSplitPara(p3, pThreeRef);
    return (
        <section
            className="my-12 flex flex-col"
        >
            <motion.h2 variants={fadeIn} className="text-2xl font-semibold mb-4">
                Our Services
            </motion.h2>

            <div className="max-w-[900px] self-center">
                <motion.div
                    variants={fadeIn}
                    className="mb-8 grid md:grid-cols-2 grid-cols-1 gap-8"
                >
                    <div
                        className=""
                        ref={pOneRef}
                    >
                        <h3 className="text-xl font-semibold mb-2">1. Personalized Garden Consulting</h3>
                        
                        <div className="space-y-4 flex gap-4 lg:flex-row flex-col justify-between w-full items-start">
                            <p className="leading-tight tracking-tight flex flex-wrap gap-x-2">
                                {paraOne}
                            </p>
                        </div>

                        <p className="font-semibold mb-2">Services Include:</p>
                        <ul
                            className="list-disc list-inside mb-4"
                        >
                            <li>
                                Garden layout assistance
                            </li>
                            <li>
                                Seasonal planting schedules
                            </li>
                            <li>
                                Pest management and organic practices
                            </li>
                            <li>
                                Maintenance schedules
                            </li>
                            <li>
                                Harvesting and storage techniques
                            </li>
                        </ul>
                    </div>

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
                </motion.div>
            
                <motion.div
                    variants={fadeIn}
                    className="mb-8 md:grid md:grid-cols-2 flex flex-col-reverse gap-8"
                >
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

                    <div
                        className=""
                        ref={pTwoRef}
                    >
                        <h3 className="text-xl font-semibold mb-2">2. Workshops for Schools, Nonprofits & Communities</h3>
                        
                        <div className="space-y-4 flex gap-4 lg:flex-row flex-col justify-between w-full items-start">
                            <p className="leading-tight tracking-tight flex flex-wrap gap-x-2">
                                {paraTwo}
                            </p>
                        </div>

                    </div>
                </motion.div>
            
                <motion.div
                    variants={fadeIn}
                    className="mb-8 grid md:grid-cols-2 grid-cols-1 gap-8"
                    ref={pThreeRef}
                >
                    <div className=""
                        ref={ref}
                    >
                        <h3 className="text-xl font-semibold mb-2">3. Family Gardening Projects & On-Site Learning</h3>
                        
                        <div className="space-y-4 flex gap-4 lg:flex-row flex-col justify-between w-full items-start">
                            <p className="leading-tight tracking-tight flex flex-wrap gap-x-2">
                                {paraThree}
                            </p>
                        </div>

                    </div>

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
                </motion.div>
            </div>
        </section>
    )
}