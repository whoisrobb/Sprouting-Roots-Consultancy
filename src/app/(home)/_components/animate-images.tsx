'use client'

import { useRef, useEffect, useState } from 'react'
import Image from 'next/image'

// Custom hook for intersection observer
const useIntersectionObserver = (options = {}) => {
  const ref = useRef(null)
  const [isIntersecting, setIntersecting] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting)
    }, options)

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [options])

  return [ref, isIntersecting]
}

type GridItemProps = {
    image: string,
    title: string,
    subtitle: string,
    delay: number
}

const GridItem = ({ image, title, subtitle, delay }: GridItemProps) => {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 })

  return (
    <div
    //   ref={ref}
      className={`transition-opacity duration-1000 ${
        isIntersecting ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <Image
        src={image}
        alt={title}
        width={400}
        height={300}
        className="w-full h-64 object-cover rounded-lg"
      />
      <h2 className="text-xl font-bold mt-4">{title}</h2>
      <p className="text-base text-gray-600">{subtitle}</p>
    </div>
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

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {items.map((item, index) => (
          <GridItem
            key={index}
            image={item.image}
            title={item.title}
            subtitle={item.subtitle}
            delay={index * 200} // Stagger the animation by 200ms for each item
          />
        ))}
      </div>
    </div>
  )
}