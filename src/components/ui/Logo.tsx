import React from "react";
import Image from "next/image";
import Link from "next/link";

export const Logo: React.FC = () => {
  return (
    <div>
      <Link href="/">
        <Image
          src="/images/general/logo.png"
          alt="logo"
          priority
          width={140}
          height={140}
        />
      </Link>
    </div>
  );
};
