import React from "react";
import { cn } from "@/lib/utils";

export const JoinWaitlistButton: React.FC<{ className?: string }> = ({
  className,
}) => {
  return (
    <button
      className={cn("btn-primary font-accent", className)}
      onClick={() => window.open("https://zc.vg/tav67", "_blank")}
    >
      Join Waitlist
    </button>
  );
};
