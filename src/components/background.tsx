import React from "react";

import { cn } from "@/lib/utils";

type BackgroundProps = {
  children: React.ReactNode;
  variant?: "top" | "bottom";
  className?: string;
};

export const Background = ({
  children,
  variant = "top",
  className,
}: BackgroundProps) => {
  return (
    <div
      className={cn(
        "relative mx-2.5 mt-2.5 lg:mx-4",
        variant === "top" &&
          "from-primary/50 via-background to-background/80 rounded-t-4xl bg-linear-to-b rounded-b-2xl via-20%",
        variant === "bottom" &&
          "from-background via-background to-primary/50 rounded-b-4xl bg-linear-to-b rounded-t-2xl",
        className,
      )}
    >
      {children}
    </div>
  );
};
