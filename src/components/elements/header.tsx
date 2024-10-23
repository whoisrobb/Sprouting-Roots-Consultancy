"use client";

import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { useRef, useState } from 'react';
import Logo from './logo';
import DesktopNav from './desktop-nav';
import MobileNav from './mobile-nav';

const Header = () => {
    const [hidden, setHidden] = useState(false);
    const lastYRef = useRef(0);

    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, 'change', (latest) => {
        const difference = latest - lastYRef.current;
        
        if (Math.abs(difference) > 50) {
            setHidden(difference > 0);

            lastYRef.current = latest;
        }
    })

  return (
    <motion.header
        className="fixed left-0 right-0 h-20 z-[100] flex justify-between items-center backdrop-blur-md lg:px-8 md:px-4 px-2 shadow-sm"
        variants={{
            visible: { y: 0 },
            hidden: { y: '-100%' }
        }}
        animate={hidden ? 'hidden': 'visible'}
        transition={{ duration: 0.2 }}
    >
        <Logo className='w-40 col-span-1' />

        <DesktopNav />
        <MobileNav />
    </motion.header>
  )
}

export default Header