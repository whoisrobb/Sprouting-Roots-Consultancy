'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

type GridItemProps = {
    image: string,
    title: string,
    subtitle: string,
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

const GridItem = ({ image, title, subtitle, index }: GridItemProps) => {
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
        <p className="text-base text-gray-600">{subtitle}</p>
    </motion.div>
  )
}

export default function StaggeredGrid() {

  const items = [
    {
      image: '/placeholder.svg',
      title: 'Mountain Retreat',
      subtitle: 'Escape to nature\'s embrace',
    },
    {
      image: '/placeholder.svg',
      title: 'Urban Adventure',
      subtitle: 'Explore city life and culture',
    },
    {
      image: '/placeholder.svg',
      title: 'Coastal Getaway',
      subtitle: 'Relax by the sea shore',
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
                subtitle={item.subtitle}
                index={index + 1}
            />
            ))}
        </motion.div>
    </div>
  )
}