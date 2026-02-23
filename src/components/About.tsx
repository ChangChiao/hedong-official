import Image from "next/image";

const services = [
  "神像整修",
  "神像粉身",
  "神像翻新",
  "神像製作",
  "神像整理",
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-20">
      <h2 className="mb-12 text-center font-serif text-3xl font-bold text-brand-brown md:text-4xl">
        關於我們
      </h2>
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div>
          <p className="mb-6 text-lg leading-relaxed text-brand-dark/80">
            和東佛具店深耕佛具工藝多年，秉持「真材實料、細膩工法」的經營理念，致力於為每一尊神像注入虔誠與專業。我們擁有豐富的神像整修與製作經驗，從選材、雕刻到粉身彩繪，每一道工序皆嚴格把關，傳承傳統工藝之美，為信眾打造莊嚴殊勝的神像。
          </p>
          <h3 className="mb-4 font-serif text-xl font-bold text-brand-brown">
            核心服務
          </h3>
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {services.map((service) => (
              <li
                key={service}
                className="rounded-lg bg-brand-brown/10 px-4 py-3 text-center font-medium text-brand-brown"
              >
                {service}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
          <Image
            src="/images/about.webp"
            alt="和東佛具店店面環境 — 神像整修工藝現場"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
