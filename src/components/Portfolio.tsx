"use client";

import Image from "next/image";
import { useState } from "react";
import Lightbox from "./Lightbox";

interface WorkItem {
  src: string;
  title: string;
  category: string;
}

const categories = ["全部", "佛像系列", "神桌配套", "宗教文物"];

const works: WorkItem[] = [
  { src: "/images/work-01.webp", title: "觀音菩薩整修", category: "佛像系列" },
  { src: "/images/work-02.webp", title: "媽祖神像粉身", category: "佛像系列" },
  { src: "/images/work-03.webp", title: "關聖帝君翻新", category: "佛像系列" },
  { src: "/images/work-04.webp", title: "實木神桌訂製", category: "神桌配套" },
  { src: "/images/work-05.webp", title: "神桌配件組合", category: "神桌配套" },
  { src: "/images/work-06.webp", title: "香爐供品器具", category: "宗教文物" },
  { src: "/images/work-07.webp", title: "土地公神像製作", category: "佛像系列" },
  { src: "/images/work-08.webp", title: "佛具文物修復", category: "宗教文物" },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("全部");
  const [lightboxItem, setLightboxItem] = useState<WorkItem | null>(null);

  const filtered =
    activeCategory === "全部"
      ? works
      : works.filter((w) => w.category === activeCategory);

  return (
    <section id="portfolio" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-12 text-center font-serif text-3xl font-bold text-brand-brown md:text-4xl">
          精選作品
        </h2>

        {/* Category filters */}
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                activeCategory === cat
                  ? "bg-brand-red text-white"
                  : "bg-brand-brown/10 text-brand-brown hover:bg-brand-brown/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((item) => (
            <button
              key={item.src}
              onClick={() => setLightboxItem(item)}
              aria-label={`查看作品：${item.title}`}
              className="group overflow-hidden rounded-xl text-left"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={item.src}
                  alt={`${item.title} — 和東佛具店`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <p className="bg-brand-brown/5 px-4 py-3 font-medium text-brand-brown">
                {item.title}
              </p>
            </button>
          ))}
        </div>
      </div>

      {lightboxItem && (
        <Lightbox
          src={lightboxItem.src}
          alt={`${lightboxItem.title} — 和東佛具店`}
          title={lightboxItem.title}
          onClose={() => setLightboxItem(null)}
        />
      )}
    </section>
  );
}
