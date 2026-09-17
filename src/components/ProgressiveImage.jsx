"use client";

import { useState } from "react";
import Image from "next/image";
import { getBlurDataURL } from "@/utils/blurUtils";

export default function ProgressiveImage({
  src,
  alt = "",
  className = "",
  placeholder,
  blurDataURL,
  onLoad,
  noBlur = false,
  ...props
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  const cleanSrc = typeof src === "string" ? src : src?.src || "";
  const isLogoOrIcon =
    noBlur ||
    cleanSrc.includes("/logo/") ||
    cleanSrc.includes("/icons/") ||
    cleanSrc.includes("/group_logos/") ||
    cleanSrc.includes("favicon") ||
    cleanSrc.includes("logo");

  // For logos and icons, render crisp image directly with no blur effect
  if (isLogoOrIcon) {
    return (
      <Image
        src={src}
        alt={alt}
        onLoad={onLoad}
        className={className}
        {...props}
      />
    );
  }

  const resolvedBlurURL = blurDataURL || getBlurDataURL(src);

  return (
    <Image
      src={src}
      alt={alt}
      placeholder={placeholder || "blur"}
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
