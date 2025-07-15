import React from "react";

export const JoinWaitlistButton: React.FC<{ handleClick?: () => void }> = ({
  handleClick,
}) => {
  return (
    <button className="btn-primary font-accent" onClick={handleClick}>
      Join Waitlist
    </button>
  );
};
