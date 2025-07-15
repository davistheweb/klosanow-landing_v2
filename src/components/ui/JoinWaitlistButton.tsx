import React from "react";

export const JoinWaitlistButton: React.FC = () => {
  return (
    <button
      className="btn-primary font-accent"
      onClick={() => (window.open("https://zc.vg/tav67", "_blank"))}
    >
      Join Waitlist
    </button>
  );
};
