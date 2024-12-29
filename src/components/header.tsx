import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="w-full absolute z-10 text-white">
      <nav className="container relative flex flex-wrap items-center justify-between mx-auto p-8">
        <Link href={"/"} className="font-bold text-3xl">
          Home
        </Link>
        <div className="space-x-4 text-xl">
          <Link href={"/performance"}>performance</Link>
          <Link href={"/reliability"}>reliability</Link>
          <Link href={"/scale"}>scale</Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
