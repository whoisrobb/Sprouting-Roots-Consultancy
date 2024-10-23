import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import Image from "next/image";

const plants = [
    "https://utfs.io/f/q3DqUViB2Sv58qoL3m1Ew2WCbrhtzkolJpxNdnuyaceK5RLM",
    "https://utfs.io/f/q3DqUViB2Sv58qoL3m1Ew2WCbrhtzkolJpxNdnuyaceK5RLM",
    // "https://utfs.io/f/q3DqUViB2Sv5DKTUAHq0JplHOBLCGnfh68yVEq5AWgIMwXco",
    "https://utfs.io/f/q3DqUViB2Sv5Lk38qVOPSNyn8qb6wz0xBjDVC5RvY7IElOL2",
    "https://utfs.io/f/q3DqUViB2Sv5C6XGWKHowlWkdPXq7ct3OhIJApQCxng01ZD2",
    "https://utfs.io/f/q3DqUViB2Sv5iLFINE6spG3bCUIhR7cWPZXKVxAuolgrTdzm",
    "https://utfs.io/f/q3DqUViB2Sv5PCjXQMaNxzqC4SrQX25WRMm1ELH9YOVwiFJg",
    "https://utfs.io/f/q3DqUViB2Sv5PDfXOPSaNxzqC4SrQX25WRMm1ELH9YOVwiFJ",
    "https://utfs.io/f/q3DqUViB2Sv5a1L7TtNFBQpfTz35kVNqdE1LjOb8ihAnDmK4"
];

const firstRow = plants.slice(0, plants.length / 2);
const secondRow = plants.slice(plants.length / 2);

const PlantImage = ({ image }: { image: string }) => {
    return (
        <div className="w-80 aspect-video border overflow-hidden">
            <Image
                src={image}
                height={200}
                width={200}
                className="h-full w-full object-cover"
                alt="Plant image"
            />
        </div>
    )
}

export function PlantsCarousel() {
  return (
    <div className="relative flex my-4 w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((plant) => (
        //   <ReviewCard key={review.username} {...review} />
            <PlantImage key={plant} image={plant} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((plant) => (
        //   <ReviewCard key={review.username} {...review} />
            <PlantImage key={plant} image={plant} />
        ))}
      </Marquee>
    </div>
  );
}
