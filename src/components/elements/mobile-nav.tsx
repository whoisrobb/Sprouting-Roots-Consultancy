"use client";

import React, { useState } from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { sections } from '@/lib/utils'
import MenuBtn from '../ui/menu-btn';
import { Button } from '../ui/button';
  

const MobileNav = () => {
    const [open, setOpen] = useState(false);
  return (
    <div className="block md:hidden">
        <DropdownMenu open={open} onOpenChange={setOpen}>
            <DropdownMenuTrigger asChild>
                
                <Button
                    className="group"
                    variant="outline"
                    size="icon"
                    onClick={() => setOpen((prevState) => !prevState)}
                    aria-expanded={open}
                    aria-label={open ? "Close menu" : "Open menu"}
                >
                <svg
                    className="pointer-events-none"
                    width={16}
                    height={16}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                    d="M4 12L20 12"
                    className="origin-center -translate-y-[7px] transition-all duration-300 [transition-timing-function:cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
                    />
                    <path
                    d="M4 12H20"
                    className="origin-center transition-all duration-300 [transition-timing-function:cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
                    />
                    <path
                    d="M4 12H20"
                    className="origin-center translate-y-[7px] transition-all duration-300 [transition-timing-function:cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
                    />
                </svg>
                </Button>
                
            </DropdownMenuTrigger>
            <DropdownMenuContent className='z-[1000]' align='end'>
                {sections.map((section, index) => (
                    <div
                        className=""
                        key={index}
                    >
                        <DropdownMenuLabel
                        >
                            {section}
                        </DropdownMenuLabel>
                    </div>
                ))}
                <DropdownMenuSeparator />
                <DropdownMenuItem
                >
                    Contact
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    </div>
  )
}

export default MobileNav