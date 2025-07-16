import React from "react";
import Image from "next/image";
import Link from "next/link";
import { LogoImg } from "@/assets";

export const Logo: React.FC = () => {
  return (
    <div>
      <Link href="/">
        <Image
          src={LogoImg}
          alt="logo"
          priority
          width={140}
          height={140}
          draggable={false}
        />
      </Link>
    </div>
  );
};
