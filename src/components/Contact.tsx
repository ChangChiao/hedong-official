export default function Contact() {
  const phone = ""; // TODO: 填入實際電話號碼
  const address = ""; // TODO: 填入實際地址
  const lineUrl = ""; // TODO: 填入 LINE 加入好友連結
  const mapsQuery = encodeURIComponent(address || "和東佛具店");
  const mapsEmbedUrl = `https://www.google.com/maps?q=${mapsQuery}&output=embed`;
  const mapsNavUrl = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;

  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-20">
      <h2 className="mb-12 text-center font-serif text-3xl font-bold text-brand-brown md:text-4xl">
        聯絡我們
      </h2>

      <div className="grid gap-10 md:grid-cols-2">
        {/* Info */}
        <div className="space-y-6">
          <div>
            <h3 className="mb-2 font-serif text-xl font-bold text-brand-brown">
              店家地址
            </h3>
            <p className="text-brand-dark/80">{address || "（待更新）"}</p>
          </div>

          <div>
            <h3 className="mb-2 font-serif text-xl font-bold text-brand-brown">
              聯絡電話
            </h3>
            {phone ? (
              <a
                href={`tel:${phone}`}
                className="text-lg font-medium text-brand-red hover:text-brand-red-light"
              >
                {phone}
              </a>
            ) : (
              <p className="text-brand-dark/80">（待更新）</p>
            )}
          </div>

          <div>
            <h3 className="mb-2 font-serif text-xl font-bold text-brand-brown">
              營業時間
            </h3>
            <p className="text-brand-dark/80">週一至週六 09:00 - 18:00</p>
            <p className="text-brand-dark/60">週日公休</p>
          </div>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href={mapsNavUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-brand-brown px-6 py-3 font-medium text-white transition-colors hover:bg-brand-brown-light"
            >
              📍 開啟地圖導航
            </a>
            {lineUrl && (
              <a
                href={lineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#06C755] px-6 py-3 font-medium text-white transition-colors hover:bg-[#05a648]"
              >
                LINE 聯絡我們
              </a>
            )}
          </div>
        </div>

        {/* Map */}
        <div className="aspect-[4/3] overflow-hidden rounded-2xl">
          <iframe
            src={mapsEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="和東佛具店地圖位置"
          />
        </div>
      </div>
    </section>
  );
}
