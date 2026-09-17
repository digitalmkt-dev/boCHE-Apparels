"use client";

import { useState } from "react";
import Image from "next/image";
import { getBlurDataURL } from "@/utils/blurUtils";

export default function ProgressiveImage({
  src,
  alt = "",
  className = "",
  placeholder = "blur",
  blurDataURL,
  onLoad,
  ...props
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  const resolvedBlurURL = blurDataURL || getBlurDataURL(src);

  return (
    <Image
      src={src}
      alt={alt}
      placeholder={placeholder}
      blurDataURL={resolvedBlurURL}
      onLoad={(e) => {
        setIsLoaded(true);
        if (onLoad) onLoad(e);
      }}
      className={`transition-all duration-700 ease-out ${
        isLoaded
          ? "opacity-100 blur-0 scale-100"
          : "opacity-80 blur-md scale-105"
      } ${className}`}
      {...props}
    />
  );
}
