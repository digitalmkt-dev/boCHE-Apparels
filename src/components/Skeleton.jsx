"use client";

export default function Skeleton({ className = "", ...props }) {
  return (
    <div
      className={`animate-pulse bg-gradient-to-r from-[#EAEAEA] via-[#F4F4F2] to-[#EAEAEA] rounded-xl ${className}`}
      {...props}
    />
  );
}
