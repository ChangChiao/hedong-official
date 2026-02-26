"use client";

import Image from "next/image";
import { useEffect, useState, useCallback } from "react";

interface LightboxItem {
  src: string;
  title: string;
}

interface LightboxProps {
  items: LightboxItem[];
  initialIndex: number;
  onClose: () => void;
}

export default function Lightbox({ items, initialIndex, onClose }: LightboxProps) {
  const [index, setIndex] = useState(initialIndex);
  const item = items[index];

  const goPrev = useCallback(() => {
    setIndex((i) => (i - 1 + items.length) % items.length);
  }, [items.length]);

  const goNext = useCallback(() => {
    setIndex((i) => (i + 1) % items.length);
  }, [items.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose, goPrev, goNext]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
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

        {/* Prev */}
        <button
          onClick={goPrev}
          className="absolute left-0 top-1/2 z-10 -translate-x-12 -translate-y-1/2 text-4xl text-white/70 transition-colors hover:text-white"
          aria-label="上一張"
        >
          ‹
        </button>

        {/* Next */}
        <button
          onClick={goNext}
          className="absolute right-0 top-1/2 z-10 translate-x-12 -translate-y-1/2 text-4xl text-white/70 transition-colors hover:text-white"
          aria-label="下一張"
        >
          ›
        </button>

        <div className="relative aspect-[4/3] w-[90vw] max-w-4xl">
          <Image
            src={item.src}
            alt={`${item.title} — 和東佛具店`}
            fill
            className="rounded-lg object-contain"
            sizes="90vw"
          />
        </div>
        <p className="mt-3 text-center text-lg text-white">
          {item.title}
          <span className="ml-2 text-sm text-white/60">
            {index + 1} / {items.length}
          </span>
        </p>
      </div>
    </div>
  );
}
