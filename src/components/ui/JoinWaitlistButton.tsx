import React from "react";
import { cn } from "@/lib/utils";

export const JoinWaitlistButton: React.FC<{
  className?: string;
  handleButtonClick?: () => void;
}> = ({ className, handleButtonClick }) => {
  return (
    <button
      className={cn("btn-primary font-accent", className)}
      onClick={handleButtonClick}
    >
      Join Waitlist
    </button>
  );
};
