import { sections } from "@/lib/utils"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { ArrowRightIcon } from "@radix-ui/react-icons"
import Link from "next/link";
import { ScrollBasedVelocity } from "./velocity-scroll"


const Footer = () => {
  return (
    <div className="w-full overflow-x-hidden bg-black relative h-[85vh] text-secondary space-y-12 flex items-center justify-start flex-col py-8">
        <div className="capitalize flex items-center justify-between font-[300] gap-4 text-4xl w-full max-w-[35rem]">
            <Link
                href={'/'}
                className="hover:text-tertiary"
            >
                home
            </Link>

            {sections.map((page) => (
                <Link
                    href={`/${page}`}
                    key={`${page}`}
                    className="hover:text-tertiary"
                >
                    {page}
                </Link>
            ))}
        </div>
        
        <div className="w-full max-w-[25rem] space-y-4">
            <Input className="w-full rounded-none border-t-transparent border-l-transparent border-r-transparent" placeholder="Enter your email" />
            <Button
                variant="expandIcon"
                Icon={ArrowRightIcon}
                iconPlacement="right"
                className="capitalize border w-full rounded-none hover:bg-secondary hover:text-primary"
            >
                subscribe
            </Button>
        </div>

        <ScrollBasedVelocity />
    </div>
  )
}

export default Footer