import { HTMLAttributes } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";

const Logo = ({ className }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <Link
        href={'/'}
    >
      <div className="h-12 aspect-square">
        <Image
            src={"https://utfs.io/f/q3DqUViB2Sv5zSpO8FjI5Ylkr7Fvwidocx0U2CDmh4bgstXB"}
            alt="sprouting roots logo"
            height={100}
            width={100}
            className={cn("", className)}
        />
      </div>
    </Link>
  )
}

export default Logo