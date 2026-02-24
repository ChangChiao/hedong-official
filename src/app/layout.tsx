import type { Metadata } from "next";
import { Noto_Serif_TC, Noto_Sans_TC } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const notoSerifTC = Noto_Serif_TC({
  variable: "--font-noto-serif-tc",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const notoSansTC = Noto_Sans_TC({
  variable: "--font-noto-sans-tc",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "和東佛具店｜神像整修・神像粉身・神像翻新・神像製作・神像整理",
  description:
    "和東佛具店深耕佛具工藝多年，專營神像整修、神像粉身、神像翻新、神像製作、神像整理，真材實料、細膩工法，傳承工藝，誠心禮佛。服務台中、彰化、苗栗、南投、雲林、嘉義等地區。",
  keywords: [
    "神像整修", "神像粉身", "神像翻新", "神像製作", "神像整理",
    "佛具店", "和東佛具", "台中神像", "彰化神像", "苗栗神像",
    "南投神像", "雲林神像", "嘉義神像",
  ],
  openGraph: {
    title: "和東佛具店｜神像整修・神像粉身・神像翻新・神像製作・神像整理",
    description:
      "和東佛具店深耕佛具工藝多年，專營神像整修、神像粉身、神像翻新、神像製作、神像整理，真材實料、細膩工法。",
    type: "website",
    locale: "zh_TW",
    images: ["/images/og-image.webp"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "和東佛具店",
  description:
    "專營神像整修、神像粉身、神像翻新、神像製作、神像整理，真材實料、細膩工法。",
  image: "/images/og-image.webp",
  telephone: "",
  address: {
    "@type": "PostalAddress",
    addressCountry: "TW",
  },
  openingHours: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant-TW">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${notoSerifTC.variable} ${notoSansTC.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
