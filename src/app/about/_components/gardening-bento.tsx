import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Carrot, Brain, Dumbbell, Sprout, GraduationCap } from "lucide-react"
import Image from "next/image";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

export function GardeningBento() {
  return (
    <div className="flex gap-8 md:flex-row flex-col py-8 px-4">
      <div className="">
        <h1 className="uppercase font-bold">5 Reasons to Grow Your Own Food</h1>
        <Button
          variant="expandIcon"
          Icon={ArrowRightIcon}
          iconPlacement="right"
          className="bg-transparent hover:bg-transparent text-muted-foreground hover:text-primary p-0 hover:font-bold transition-all"
        >
          Schedule a consultation
        </Button>
      </div>

      <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
        {reasons.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={item.className}
            icon={item.icon}
          />
        ))}
      </BentoGrid>
      
    </div>
  );
}

const ImageComponent = ({ image }: { image: string }) => {
  return (
    <div className="rounded h-full w-full overflow-hidden">
      <Image
        src={image}
        height={200}
        width={200}
        className="h-full w-full object-cover"
        alt=""
      />
    </div>
  )
}

const reasons = [
  {
    title: "Healthier and Tastier",
    description: "Home-grown produce is fresher and often more nutritious than store-bought alternatives. The flavors are richer and more diverse.",
    icon: <Carrot />,
    className: "md:col-span-2",
    header: <ImageComponent image={"https://utfs.io/f/q3DqUViB2Sv5PCjXQMaNxzqC4SrQX25WRMm1ELH9YOVwiFJg"} />,
  },
  {
    title: "Stress Reduction",
    description: "Gardening is a peaceful activity that can lower stress levels and improve overall mental health.",
    icon: <Brain />,
    className: "md:col-span-1",
    header: <ImageComponent image={"https://utfs.io/f/q3DqUViB2Sv5PCjXQMaNxzqC4SrQX25WRMm1ELH9YOVwiFJg"} />,
  },
  {
    title: "Great Exercise",
    description: "Gardening activities like digging, planting, and weeding provide a full-body workout, improving physical fitness.",
    icon: <Dumbbell />,
    className: "md:col-span-1",
    header: <ImageComponent image={"https://utfs.io/f/q3DqUViB2Sv5PCjXQMaNxzqC4SrQX25WRMm1ELH9YOVwiFJg"} />,
  },
  {
    title: "Food Security",
    description: "Growing your own food increases self-sufficiency and ensures a steady supply of fresh produce.",
    icon: <Sprout />,
    header: <ImageComponent image={"https://utfs.io/f/q3DqUViB2Sv5PCjXQMaNxzqC4SrQX25WRMm1ELH9YOVwiFJg"} />,
  },
  {
    title: "Learning Opportunity",
    description: "Gardening teaches valuable skills about nature, food production, and sustainable living practices.",
    icon: <GraduationCap />,
    className: "md:col-span-1",
    header: <ImageComponent image={"https://utfs.io/f/q3DqUViB2Sv5PCjXQMaNxzqC4SrQX25WRMm1ELH9YOVwiFJg"} />,
  },
]