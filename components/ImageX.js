"use client";
import { useState } from "react";
import Image from "next/image";

const ImageX = ({ src, ...props }) => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="bg-gray-100 relative w-full h-full">
      <Image
        {...props}
        src={src}
        alt="..."
        fill
        style={{ objectFit: "cover" }}
        onLoadingComplete={(e) => {
          console.log("my loading complete", e);
          setLoading(false);
        }}
      />

      {loading && (
        <div className="bg-gray-300 animate-pulse absolute top-0 left-0 w-full h-full z-10"></div>
      )}
    </div>
  );
};

export default ImageX;
