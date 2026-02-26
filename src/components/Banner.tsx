import Image from "next/image";

export default function Banner() {
  return (
    <section className="relative aspect-[4/3] w-full overflow-hidden md:aspect-[16/7]">
      <div className="absolute inset-0 animate-[ken-burns_20s_ease-in-out_infinite_alternate]">
        <Image
          src="/images/banner.webp"
          alt="和東佛具店 — 神像整修與製作工藝"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
        <h1 className="font-serif text-4xl font-bold text-white drop-shadow-lg md:text-6xl">
          傳承工藝，誠心禮佛
        </h1>
        <p className="mt-4 text-lg text-white/90 drop-shadow md:text-xl">
          和東佛具店 — 真材實料・細膩工法
        </p>
      </div>
    </section>
  );
}
