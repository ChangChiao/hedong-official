"use client";

import Image from "next/image";
import { useEffect } from "react";

interface LightboxProps {
  src: string;
  alt: string;
  title: string;
  onClose: () => void;
}

export default function Lightbox({ src, alt, title, onClose }: LightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] max-w-4xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-3xl text-white hover:text-brand-cream"
          aria-label="關閉"
        >
          ✕
        </button>
        <div className="relative aspect-[4/3] w-[90vw] max-w-4xl">
          <Image
            src={src}
            alt={alt}
            fill
            className="rounded-lg object-contain"
            sizes="90vw"
          />
        </div>
        <p className="mt-3 text-center text-lg text-white">{title}</p>
      </div>
    </div>
  );
}
