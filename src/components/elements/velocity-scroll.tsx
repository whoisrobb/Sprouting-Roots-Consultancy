import { VelocityScroll } from "@/components/ui/scroll-based-velocity";

export function ScrollBasedVelocity() {
  return (
    <VelocityScroll
      text="Sprouting Roots - "
      default_velocity={3}
      className="text-center text-6xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-9xl md:leading-[5rem]"
    />
  );
}
