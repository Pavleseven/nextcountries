import React from "react";
import RegionCards from "../components/RegionCards";
import "../styles/regions.css";
import Link from "next/link";
import Image from "next/image";
function page() {
  return (
    <div className="py-10 px-10">
      <Link href="/">
        <Image src="/images/backimg.png" alt="back" width={35} height={35} />
      </Link>
      <div className="region-container">
        <RegionCards path="regions/Africa" source="/images/Africa.png" />
        <RegionCards path="regions/Asia" source="/images/Asia.png" />
        <RegionCards path="regions/Europe" source="/images/Europe.png" />
        <RegionCards path="regions/Oceania" source="/images/Australia.png" />
        <RegionCards path="regions/North America" source="/images/NA.png" />
        <RegionCards
          path="regions/South America"
          source="/images/SouthAM.png"
        />
      </div>
    </div>
  );
}

export default page;
