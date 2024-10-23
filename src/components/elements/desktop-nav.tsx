import React from 'react'
import { Button } from '../ui/button'
import { ArrowRightIcon } from '@radix-ui/react-icons'
import { sections } from '@/lib/utils'
import Link from 'next/link'


const DesktopNav = () => {
  return (
    <div className='md:flex items-center hidden'>
        {sections.map((section, index) => (
          <Link href={`/${section}`} key={index}>
            <Button
                variant={'linkHover2'}
                className='capitalize'
            >
                {section}
            </Button>
          </Link>
        ))}
    </div>
  )
}

export default DesktopNav