import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import React from "react";
import Cta from "../../../components/elements/cta";

const Landing = () => {
  return (
    <div className="pt-24 pb-4 flex flex-col items-center gap-8 md:h-auto h-screen justify-between">
        <div className='md:h-[65vh] h-full lg:w-[177vh] w-[100vw-2rem] flex flex-col justify-between'>
            <h1 className="font-extrabold md:text-6xl text-3xl">Growing<br/>Your Own Food<br/>Doesn't Have To Be Difficult</h1>

            <div className="space-y-2">
                <p className="">Sprouting Roots Consulting can help.<br/>We Cultivate Green Thumbs!<br />Do you want to grow your own food?</p>
                <Cta />
            </div>
        </div>

        <div className="lg:h-[100vh] lg:w-auto w-[100vw-2rem] md:aspect-video overflow-hidden border-2 border-black">
            <Image
                src={"https://utfs.io/f/q3DqUViB2Sv5ZYkPRt7uqxVNMnQXsm5ir4JGc2I7WPa1gUdz"}
                alt="Backyard garden"
                className='w-full h-full object-cover'
                height={1000}
                width={1000}
            />
        </div>
    </div>
  )
}

export default Landing
