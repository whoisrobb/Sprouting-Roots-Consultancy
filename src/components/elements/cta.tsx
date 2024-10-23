import { Button } from '@/components/ui/button'
import { ArrowRightIcon } from '@radix-ui/react-icons'
import React from 'react'

const Cta = () => {
  return (
    <Button
        variant="expandIcon"
        Icon={ArrowRightIcon}
        iconPlacement="right"
        className="bg-transparent hover:bg-transparent text-primary p-0 font-bold"
    >
        Learn more
    </Button>
  )
}

export default Cta
