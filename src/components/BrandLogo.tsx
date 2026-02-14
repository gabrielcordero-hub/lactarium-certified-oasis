import { cn } from "@/lib/utils";
import lactariumLogo from "@/assets/lactarium-logo.png";

interface BrandLogoProps {
  variant?: "default" | "inverted";
  className?: string;
}

const BrandLogo = ({ variant = "default", className }: BrandLogoProps) => {
  const isInverted = variant === "inverted";

  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <img
        src={lactariumLogo}
        alt="Lactarium logo"
        className={cn(
          "h-9 w-9 rounded-md object-contain",
          isInverted && "brightness-0 invert"
        )}
      />
      <span
        className={cn(
          "text-lg font-display font-extrabold tracking-[0.15em] uppercase select-none",
          isInverted ? "text-primary-foreground" : "text-primary"
        )}
      >
        LACTARIUM
      </span>
    </div>
  );
};

export default BrandLogo;
