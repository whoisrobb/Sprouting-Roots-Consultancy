"use client";

import React, { ReactNode, useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

const LenisProvider = ({ children }: { children: ReactNode }) => {
    useEffect(() => {
        const lenis = new Lenis()
        
        function raf(time: any) {
          lenis.raf(time)
          requestAnimationFrame(raf)
        }
        
        requestAnimationFrame(raf)
    }, [])
  return (
    <div>
      {children}
    </div>
  )
}

export default LenisProvider
