'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

type GridItemProps = {
    image: string,
    title: string,
    // subtitle: string,
    index: number
};

const variants = {
    initial: {
        opacity: 0,
        y: 20
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.3 + index/10
        }
    })
}

const GridItem = ({ image, title, index }: GridItemProps) => {
    const container = useRef(null);
    const inView = useInView(container);

  return (
    <motion.div
        ref={container}
        variants={variants}
        initial="initial"
        animate={inView ? "animate" : ""}
        custom={index}
    >
        <Image
            src={image}
            alt={title}
            width={400}
            height={300}
            className="w-full h-64 object-cover border"
        />
        <h2 className="text-xl font-bold mt-4">{title}</h2>
        {/* <p className="text-base text-gray-600">{title}</p> */}
    </motion.div>
  )
}

export default function Intro () {

  const items = [
    {
      image: 'https://utfs.io/f/q3DqUViB2Sv5oLcYeVNQcSl4En2WNDw6moAHZkjThJasR1XG',
      title: 'Seed to Harvest',
      // subtitle: 'Escape to nature\'s embrace',
    },
    {
      image: 'https://utfs.io/f/q3DqUViB2Sv54T5xZkhEKloWMkjthwIZbRf0UzNALegFOXT8',
      title: 'Container and Raised Bed Gardens',
      // subtitle: 'Explore city life and culture',
    },
    {
      image: 'https://utfs.io/f/q3DqUViB2Sv53VKUnC8uXD6soPG9Lae0ivtIZTFu5h2qwYb1',
      title: 'School and Community Gardens',
      // subtitle: 'Relax by the sea shore',
    },
  ]

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  return (
    <div className="py-8 px-4">
      <h1 className="uppercase font-bold">Home garden consultation and training</h1>

      <div className="container mx-auto px-4 py-8">
          <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              // transition={{ delay: 0.2 }}
          >
              {items.map((item, index) => (
              <GridItem
                  key={index}
                  image={item.image}
                  title={item.title}
                  // subtitle={item.subtitle}
                  index={index + 1}
              />
              ))}
          </motion.div>
      </div>
    </div>
  )
}