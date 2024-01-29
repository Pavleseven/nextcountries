import Image from "next/image";
import Link from "next/link";
import React from "react";

function RegionsCards({ path, source }) {
  return (
    <Link href={path} className="region-cards brightness-50">
      <Image src={source} alt="region-img" width={500} height={500} />
    </Link>
  );
}

export default RegionsCards;
