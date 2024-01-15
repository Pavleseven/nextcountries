import Link from "next/link";
import React from "react";

function Headerselect() {
  return (
    <div>
      <Link href="regions/America">America</Link>

      <Link href="regions/Europe">Europe</Link>

      <Link href="regions/Asia">Asia</Link>

      <Link href="regions/Africa">Africa</Link>

      <Link href="regions/Ocenia">Ocenia</Link>
    </div>
  );
}

export default Headerselect;
