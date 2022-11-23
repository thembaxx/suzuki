"use client";
import { useState } from "react";
import Image from "next/image";

const ImageX = ({ src, ...props }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  return (
    <div className={`relative`}>
      <Image
        {...props}
        src={src}
        placeholder="blur"
        alt="..."
        fill
        style={{ objectFit: "cover" }}
        onLoadingComplete={(e) => {
          console.log("my loading complete");
          setLoading(false);
        }}
      />

      {loading && (
        <div className="bg-gray-200 animate-pulse absolute top-0 left-0 w-full h-full z-10"></div>
      )}
    </div>
  );
};

export default ImageX;
