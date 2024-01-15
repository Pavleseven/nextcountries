import Image from "next/image";
import React from "react";

function SCheader() {
  return (
    <div className="sc-header">
      <Image
        src="/images/countryimg.png"
        width={75}
        height={75}
        alt="county-img"
      />
    </div>
  );
}

export default SCheader;
